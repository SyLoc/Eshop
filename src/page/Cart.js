import React, { useState, useEffect } from 'react';
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import '../css/cart.css'
import Footer from '../components/footer/Footer';
import CartItems from '../components/cart/cart.items';

import {useSelector} from 'react-redux'


const Cart = () => {
  const [carts, setCarts] = useState([])
  const carttt =  useSelector(state => state.sale.cart);

  useEffect(() => {
    // const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCarts(carttt)
  }, [carttt]);

  const increase = (product) => {
    const exist = carts.find(item => item.id === product.id)
    if(exist){
      setCarts(
        carts.map(item => item.id === product.id ? {...exist, amount: exist.amount + 1} : item)
      );
    }else{
      setCarts([...carts, {...product, amount:1}])
    }
  }

  const decrease = (product) => {
    const exist = carts.find(item => item.id === product.id)
    if(exist.amount === 1){
      setCarts(carts.filter(item => item.id !== product.id))
    }else{
      setCarts(
        carts.map(item => item.id === product.id ? {...exist, amount: exist.amount - 1} : item)
      );
    }
  }

  if (carts.length === 0) {
    return (
      <section className='grid'>
        <div className='cart__header'>
          <i className='cart__header-icon'><GiShoppingCart /></i>
          <h3 className='cart__header-content'>Giỏ hàng của bạn</h3>
        </div>
        <div className='cart__main main-center'>
          <div>
            <h1 className='main-center-title'>Giỏ hàng của bạn đang trống hãy thêm sản phẩm vào giỏ hàng</h1>
            <Link to='/' className='btn btn--normal'>Quay lại</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='grid'>
      <div className='cart__header'>
        <i className='cart__header-icon'><GiShoppingCart /></i>
        <h3 className='cart__header-content'>Giỏ hàng của bạn</h3>
      </div>
      <div className='cart__main'>
        <div className='cart__main-header'>
          <div className='cart__main-header-left'>
            <input className='cart__main-header__check' type="checkbox" />
            <span className='cart__main-header__content'>Sản phẩm</span>
          </div>
          <div className='cart__main-header-right'>
            <span className='cart__main-header__content'>Đơn giá</span>
            <span className='cart__main-header__content'>Số lượng</span>
            <span className='cart__main-header__content'>Số tiền</span>
            <span className='cart__main-header__content'>Thao tác</span>
          </div>
        </div>

        <div className='cart__main-container'>
          <div className="cart__main-container__list">
            <CartItems 
              decrease={decrease} 
              increase={increase}
              carts={carts} 
            />
          </div>
        </div>
        <div className='cart__main-sell'>
          <div className='cart__main-sell-left'>
            <input className='cart__main-sell-left__check' type="checkbox" />
            <span className='cart__main-sell-left__chooseAll'>Chọn tất cả (1)</span>
            <button className='cart__main-sell-left__delete'>xóa</button>
          </div>
          <div className="cart__main-sell-right">
            <span className='cart__main-sell-right__total-payment'>Tổng thanh toán (100 Sản phẩm):</span>
            <span className='cart__main-sell-right__total-payment total-payment--highlight'>₫15.000</span>
            <Link to='/checkout' className='btn btn--primary'>Mua hàng</Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Cart;