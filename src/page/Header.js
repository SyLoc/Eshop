import React, {useState,useEffect} from 'react';
import "../css/header.css";

import Navigation from '../components/header/Navigation';
import HeaderSearch from '../components/header/HeaderSearch';

import {SET_CART} from '../constant/constants'

import {getAllCart,getOrder} from '../actions/ActionWithProduct'
import {useDispatch, useSelector} from 'react-redux'

const Header = () => {
  const [cart, setCart] = useState([])
  const isLogin = useSelector(state => state.lo.isLogin);
  const productArr = useSelector(state => state.pro.products);
  const dispatch = useDispatch();

  const listCart = useSelector(state => state.sale.cartInfo.products);

  useEffect(() => { 
    if(listCart.length !== 0){
      const newPro = []
      for (let i = 0; i < productArr.length; i++) { 
        for (let k = 0; k < listCart.length; k++) {
          if (productArr[i].id === listCart[k].productId) {
            let setProducts = {
              ...productArr[i],
              amount: listCart[k].amount,
              type: listCart[k].type
            }
            newPro.push(setProducts)
          }
        }
      }
      dispatch({type: SET_CART, payload: newPro})
      setCart(newPro)
    }else{
      dispatch({type: SET_CART, payload: []})
      setCart([])
    }
  }, [listCart, productArr,dispatch]);

  useEffect(() => {
    if(isLogin){
      dispatch(getAllCart())
      dispatch(getOrder())
    }
  }, [isLogin, dispatch]);

  return (
    <header className="header">
      <div className='header-wrap'>
        <Navigation/>
        <HeaderSearch cart={cart}/>
      </div>
    </header>
  );
}; 

export default Header;