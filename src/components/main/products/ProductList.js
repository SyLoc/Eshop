import React, { useEffect, useState } from 'react';
import Product from './Product'
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../../Loading';

import '../../../css/main.css'

import {getProductList} from '../../../actions/ActionWithProduct'

const ProductList = () => {
  const products = useSelector(state => state.pro.products);
  const valueFilterLabel = useSelector(state => state.pro.filterLabel);
  const valueFilterPrice = useSelector(state => state.pro.filterPrice);
  const dispatch = useDispatch();
  const [data, setData] = useState(products)

  const handleFilterLabel = (value) =>{
    if(value === 'popular'){
      setData(products)
    }
    if(value === 'new'){
      const newData = []
      let count = 0;
      for(let i=products.length-1 ;i >= 0; i--){
        if(count < 8){
          newData.push(products[i])
          count++;
        }
      }
      setData(newData)
    }
    if(value === 'sell'){
      const newData = []
      products.map((item) => {
        if(item.sold >= 10){
          newData.push(item)
        }
      })
      setData(newData)
    }
  }

  // 'LowtoHigh'
  const handleFilterPrice = (value) =>{
    const newData =  products.sort((a, b) =>{
      if(value === 'LowtoHigh'){
        return b.priceCurrent.split('.').join('') - a.priceCurrent.split('.').join('')
      }
      if(value === 'HightoLow'){
        return a.priceCurrent.split('.').join('') - b.priceCurrent.split('.').join('')
      }
    })
    setData(newData)
  }

  useEffect(() => {
    dispatch(getProductList('products'))
  }, [dispatch]);

  useEffect(() => {
    handleFilterPrice(valueFilterPrice) 
  }, [valueFilterPrice]);

  useEffect(() => {
    handleFilterLabel(valueFilterLabel)
  }, [valueFilterLabel]);

  if(products.length < 1){
    return (
      <Loading/>
    )
  }

  
  return (
    <section className="home-products">
      <div className="grid__row grid__row--reset">
      {
        data.map((item, index) => <Product key={index} {...item}/>)
      }
      </div>
    </section>
  );

};

export default ProductList;