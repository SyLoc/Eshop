import React, { useState, useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom'
import '../css/cart.css'
import Footer from '../components/footer/Footer';
import CartItems from '../components/cart/cart.items';

import { useSelector } from 'react-redux'
import { updateCart } from '../actions/ActionWithProduct'
import { useDispatch } from 'react-redux'
import HeaderSecond from '../components/header/HeaderSecond';


const Cart = () => {
  const cart = useSelector(state => state.sale.cart);
  const cartInfo = useSelector(state => state.sale.cartInfo); 
  const dispatch = useDispatch();
  const history = useHistory()

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
    if(exist && carts.length === 1){
      const cartItem = {
        idUser: cartInfo.idUser,
        products: []
      }
      dispatch(updateCart(cartInfo.id, cartItem, (data) => {
        if(data) history.push('/')
      }))
    }else{
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
    const arr = carts.filter(x => selectedProducts.includes(x.id))
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
        <HeaderSecond text={'Gi??? h??ng'} type={'cart'} />
        <div className='cart__main main-center'>
          <div>
            <h1 className='main-center-title'>Gi??? h??ng c???a b???n ??ang tr???ng h??y th??m s???n ph???m v??o gi??? h??ng</h1>
            <Link to='/' className='btn btn--normal'>Th??m s???n ph???m v??o gi??? h??ng</Link>
          </div>
        </div>
      </section>
    )
  }



  return (
    <section className='grid'>
      <HeaderSecond text={'Gi??? h??ng'} type={'cart'} />
      <div className='cart__main'>
        <div className='cart__main-header'>
          <div className='cart__main-header-left'>
            {/* <input onChange={checkInput} className='cart__main-header__check' type="checkbox" /> */}
            <span style={{ marginLeft: '45px' }} className='cart__main-header__content'>S???n ph???m</span>
          </div>
          <div className='cart__main-header-right'>
            <span className='cart__main-header__content'>????n gi??</span>
            <span className='cart__main-header__content'>S??? l?????ng</span>
            <span className='cart__main-header__content'>S??? ti???n</span>
            <span className='cart__main-header__content'>Thao t??c</span>
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
            <span className='cart__main-sell-left__chooseAll'>Ch???n t???t c??? ({cartQuantity})</span>
            <button className='cart__main-sell-left__delete'>x??a</button>
          </div>
          <div className="cart__main-sell-right">
            <span className='cart__main-sell-right__total-payment'>T???ng thanh to??n ({selectedQuantity} S???n ph???m):</span>
            <span className='cart__main-sell-right__total-payment total-payment--highlight'>???{total}</span>
            {
              selectedProducts.length > 0 ? (<Link to='/checkout' onClick={order} className='btn btn--primary'>Mua h??ng</Link>) :
              (<Link to='' className='btn btn--primary btn--disabled'>Mua h??ng</Link>)
            }
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  )
}

export default Cart;