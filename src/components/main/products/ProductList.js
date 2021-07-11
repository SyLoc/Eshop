import React, { useEffect, useState } from 'react';
import Product from './Product'
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../../Loading';
import {FaRegLightbulb} from 'react-icons/fa'

import '../../../css/main.css'

import {getProductList} from '../../../actions/ActionWithProduct'

const ProductList = () => {
  const products = useSelector(state => state.pro.products);
  const valueFilterLabel = useSelector(state => state.pro.filterLabel);
  const valueFilterPrice = useSelector(state => state.pro.filterPrice);
  const searchTerm = useSelector(state => state.pro.searchTerm);
  const dispatch = useDispatch();
  
  const [data, setData] = useState(products)

  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch]);

  const filterProduct = (Array = []) =>{
    const newArray = [...Array]

    const removeAccents = (str='') => {
      return str.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }

    const getFollowName = (value) =>{
      const newdata = newArray.filter(item => {
        let newItem = removeAccents(item.name)
        let searchTerm = removeAccents(value)
        if(value === ""){
          return item
        }else if(newItem.toLowerCase().includes(searchTerm.toLowerCase())){
          return item
        }
        return 0
      })
      setData(newdata)
    }
  
    const getFollowLabel = (label) =>{

      if(label === 'popular'){
        setData(newArray)
      }
  
      if(label === 'new'){
        const arr = []
        let count = 0;
        for(let i=newArray.length-1 ;i >= 0; i--){
          if(count < 8){
            arr.push(newArray[i])
            count++;
          }
        }
        setData(arr)
      }
  
      if(label === 'sell'){
        const arr = []
        newArray.forEach((item) => {
          if(item.sold >= 10){
            return arr.push(item)
          }
        })
        setData(arr)
      }
      
    }
  
    const getFollowPrice = (value) =>{

      if(newArray.length <= 1){
        return 
      }
      const newData =  newArray.sort((a, b) => {
        if(value === 'LowtoHigh'){
          return a.priceCurrent.split('.').join('') - b.priceCurrent.split('.').join('')
        }
        if(value === 'HightoLow'){
          return b.priceCurrent.split('.').join('') - a.priceCurrent.split('.').join('')
        }
        return newArray
      })
      setData(newData)
    }

  
    const getFollowCategory = (nameCategory) =>{
      const data = newArray.filter(item => item.category === nameCategory)
      console.log(data)
    }
  
    return {
      getFollowName,
      getFollowLabel,
      getFollowPrice,
      getFollowCategory
    }
  }

  useEffect(() => {
    const func = filterProduct(products)
    func.getFollowName(searchTerm)
  }, [searchTerm,products]);

  useEffect(() => {
    const func = filterProduct(products)
    func.getFollowPrice(valueFilterPrice)
  }, [valueFilterPrice,products]);

  useEffect(() => {
    const func = filterProduct(products)
    func.getFollowLabel(valueFilterLabel)
  }, [valueFilterLabel,products]);


  if(products.length < 1){
    return (
      <Loading/>
    )
  } 

  if(data.length === 0){
    return (
      <section className="home-products">
        <div className='home-products__no-products'>
          <div className='home-products__no-products__title'> <FaRegLightbulb/> Chúng tôi không tìm thấy sản phẩm "{searchTerm}" nào.</div>
          <img className="home-products__no-products__img" src="https://khoalinhkids.com/images/empty-cart.png" alt="" />
        </div>
      </section>
    )
  }
  
  return (
    <section className="home-products">
      <div className="grid__row grid__row--reset">
      {
        data.map((item, index) => <Product key={index} {...item}/> )
      }
      </div>
    </section>
  );

};

export default ProductList;