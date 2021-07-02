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
  const [ProductAfterSearching, SetproductAfterSearching] = useState([])
  const [search, setSearch] = useState(false)

  const checkSearch = () =>{
    if(search === true){
      return [...ProductAfterSearching]
    }else{
      return [...products]
    }
  }

  const handleFilterLabel = (value) =>{
    var newData = checkSearch()

    if(value === 'popular'){
      setData(newData)
    }

    if(value === 'new'){
      const arr = []
      let count = 0;
      for(let i=newData.length-1 ;i >= 0; i--){
        if(count < 8){
          arr.push(newData[i])
          count++;
        }
      }
      setData(arr)
    }

    if(value === 'sell'){
      const arr = []
      newData.map((item) => {
        if(item.sold >= 10){
          arr.push(item)
        }
      })
      setData(arr)
    }
  }


  const handleFilterPrice = (value) =>{
    const newArray = checkSearch() 
    if(newArray.length <= 1){
      return 
    }
    const newData =  newArray.sort((a, b) =>{
      if(value === 'LowtoHigh'){
        return a.priceCurrent.split('.').join('') - b.priceCurrent.split('.').join('')
      }
      if(value === 'HightoLow'){
        return b.priceCurrent.split('.').join('') - a.priceCurrent.split('.').join('')
      }
    })
    setData(newData)
  }

  const removeAccents = (str='') => {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }

  const handleSearch = (value) =>{
    const newArr = [...products]

    const newdata = newArr.filter((item) => {
      let newItem = removeAccents(item.name)
      let newValue = removeAccents(value)
      if(value === ""){
        return item
      }else if(newItem.toLowerCase().includes(newValue.toLowerCase())){
        setSearch(true)
        return item
      }
    })
    SetproductAfterSearching(newdata)
    setData(newdata)
  }

  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch]);

  useEffect(() => {
    handleFilterPrice(valueFilterPrice) 
  }, [valueFilterPrice]);

  useEffect(() => {
    handleFilterLabel(valueFilterLabel)
  }, [valueFilterLabel]);

  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm]);


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
        //search.status ? search.data.map((item, index) => <Product key={index} {...item}/>) :
        data.map((item, index) => <Product key={index} {...item}/>)
      }
      </div>
    </section>
  );

};

export default ProductList;