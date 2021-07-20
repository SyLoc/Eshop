import React, { useState, useEffect } from 'react';
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import '../css/cart.css'
import Footer from '../components/footer/Footer';
import CartItems from '../components/cart/cart.items';

import { useSelector } from 'react-redux'
import { updateCart } from '../actions/ActionWithProduct'
import { useDispatch } from 'react-redux'


const Cart = () => {
  const cart = useSelector(state => state.sale.cart);
  const cartInfo = useSelector(state => state.sale.cartInfo);
  const dispatch = useDispatch();

  const [carts, setCarts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [total, setTotal] = useState('0')
  const [selectedQuantity, setSelectedQuantity] = useState(0)
  const [cartQuantity, setCartQuantity] = useState(0)


  useEffect(() => {
    setCarts(cart)
  }, [cart]);

  useEffect(() => {
    let count = 0
    carts.map(x => count += x.amount)
    setCartQuantity(count)
  }, [carts]);


  const checkInputAll = (e) => {
    const {checked} = e.target
    const arr = []
    if(checked){
      carts.map(item => arr.unshift(item.id))
      setSelectedProducts(arr)
    }else{
      setSelectedProducts([])
    }
  }


  const checkInput = (e) => {
    const { name } = e.target
    const exist = selectedProducts.find(x => x === name)
    if (exist) {
      setSelectedProducts(selectedProducts.filter(x => x !== name))
    } else {
      setSelectedProducts([...selectedProducts, name])
    }
  }


  const convertArr = (array) => {
    let arr = []
    array.forEach(x => {
      const { id, amount, type } = x
      const newItem = {
        productId: id,
        amount: amount,
        type: type
      }
      arr.unshift(newItem)
    })
    return arr
  }

  const increase = (product) => {
    const exist = carts.find(item => item.id === product.id)
    if (exist) {
      let newCart = carts.map(item => item.id === product.id ? { ...exist, amount: exist.amount + 1 } : item)
      newCart = convertArr(newCart)
      const listOfProducts = {
        idUser: cartInfo.idUser,
        products: [
          ...newCart
        ]
      }
      dispatch(updateCart(cartInfo.id, listOfProducts, (data) => {}))
    } else {
      setCarts([...carts, { ...product, amount: 1 }])
    }
  }

  const decrease = (product) => {
    const exist = carts.find(item => item.id === product.id)
    if (exist.amount === 1) {
      deleteItem(exist.id)
    } else {
      let newCart = carts.map(item => item.id === product.id ? { ...exist, amount: exist.amount - 1 } : item)
      newCart = convertArr(newCart)
      const listOfProducts = {
        idUser: cartInfo.idUser,
        products: [
          ...newCart
        ]
      }
      dispatch(updateCart(cartInfo.id, listOfProducts, (data) => {}))
    }
  }

  const deleteItem = (id) => {
    const exist = carts.find(item => item.id === id)
    if (exist) {
      let newCart = carts.filter(x => x.id !== id)
      newCart = convertArr(newCart)
      const listOfProducts = {
        idUser: cartInfo.idUser,
        products: [
          ...newCart
        ]
      }
      dispatch(updateCart(cartInfo.id, listOfProducts, (data) => {}))
    }
  }

  const setType = (proId, typePro) =>{
    const exist = carts.find(item => item.id === proId)
    if(exist){
      let newCart = carts.map(item => item.id === proId ? { ...exist, type: typePro } : item)
      newCart = convertArr(newCart)
      const listOfProducts = {
        idUser: cartInfo.idUser,
        products: [
          ...newCart
        ]
      }
      dispatch(updateCart(cartInfo.id, listOfProducts, (data) => {}))
    }
  }

  const covert = (value) => {
    const arr = (value + '000').split('')
    let count = 0;
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
      count++;
      if (count === 3) {
        count = 0;
        if (i !== 0) {
          result.unshift('.' + arr[i])
        } else {
          result.unshift(arr[i])
        }
      } else {
        result.unshift(arr[i])
      }
    }
    return result.join('')
  }


  const convertStr = (str) => {
    let arr = str.split('.')
    arr.pop()
    return arr.join('')
  }

  const order = () =>{
    const arr = []
    for(let i=0; i < carts.length; i++){
      for(let z=0; z < selectedProducts.length; z++){
        if(carts[i].id === selectedProducts[z]){
          arr.unshift(carts[i])
        }
      }
    }
    localStorage.setItem('order', JSON.stringify(arr))
  }



  useEffect(() => {
    let arr = []
    let count = 0
    selectedProducts.map(z => carts.filter(x => x.id === z ? (arr.push(x)) : x))
    arr.map(item => count += item.amount)
    setSelectedQuantity(count)
    arr = arr.reduce((a, b) => a + convertStr(b.priceCurrent) * b.amount, 0)
    setTotal(covert(arr))
  }, [selectedProducts, carts]);


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
            {/* <input onChange={checkInput} className='cart__main-header__check' type="checkbox" /> */}
            <span style={{ marginLeft: '45px' }} className='cart__main-header__content'>Sản phẩm</span>
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
              checkInput={checkInput}
              covert={covert}
              convertStr={convertStr}
              deleteItem={deleteItem}
              setType={setType}
            />
          </div>
        </div>
        <div className='cart__main-sell'>
          <div className='cart__main-sell-left'>
            <input onChange={checkInputAll} className='cart__main-sell-left__check' type="checkbox" />
            <span className='cart__main-sell-left__chooseAll'>Chọn tất cả ({cartQuantity})</span>
            <button className='cart__main-sell-left__delete'>xóa</button>
          </div>
          <div className="cart__main-sell-right">
            <span className='cart__main-sell-right__total-payment'>Tổng thanh toán ({selectedQuantity} Sản phẩm):</span>
            <span className='cart__main-sell-right__total-payment total-payment--highlight'>₫{total}</span>
            {
              selectedProducts.length > 0 ? (<Link to='/checkout' onClick={order} className='btn btn--primary'>Mua hàng</Link>) :
              (<Link to='' className='btn btn--primary btn--disabled'>Mua hàng</Link>)
            }
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Cart;