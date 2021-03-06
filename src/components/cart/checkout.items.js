import React, { useState, useEffect} from 'react';
import {addOrder,updateCart} from '../../actions/ActionWithProduct'
import {useDispatch, useSelector} from 'react-redux'
import NotifiModal from '../modals/NotifiModal'
import { useHistory, useLocation } from 'react-router-dom';

const CheckoutItems = ({carts, infoCustomer}) => {
  const dispatch = useDispatch();
  const cartInfo = useSelector(state => state.sale.cartInfo);

  const [notifi, setNotifi] = useState(false)
  const [check, setCheck] = useState(false)
  const history = useHistory()
  const location = useLocation()
  

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


  let itemsPrice = carts.reduce((a,b) => a + convertStr(b.priceCurrent) * b.amount, 0)
  let shippingPrice = itemsPrice >= 2000 ? 0.000 : 40.000
  let totalPrice = itemsPrice + shippingPrice
  itemsPrice = covert(itemsPrice)
  shippingPrice = covert(shippingPrice)
  totalPrice = covert(totalPrice)

  useEffect(() => {
    infoCustomer.address !== '' ? setCheck(true) : setCheck(false)
  }, [infoCustomer]);


  const confirm = () =>{
    if(check){
      let products = JSON.parse(localStorage.getItem('order'))

      const newProducts = products.map(product => {
        return {
          id: product.id, 
          name: product.name, 
          image: product.image, 
          priceOld: product.priceOld, 
          priceCurrent: product.priceCurrent, 
          amount: product.amount, 
          type: product.type
        }
      })

      const money = {
        itemsPrice,
        shippingPrice,
        totalPrice
      }

      const today = new Date()
      const date = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear()
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

      const value = {
        infoUser:infoCustomer,
        products:newProducts, 
        total:money,
        status: 'unconfirmed',
        orderDate: date + ' ' + time
      }

      dispatch(addOrder(value,(res) =>{
        if(res){
          setNotifi(true)
          localStorage.removeItem('order')
          if(location.pathname === '/checkout'){
            deleteItemInCart(products)
          }
          setTimeout(() =>{
            history.push('/')
          }, 1500)
        }
      }))
    }else{
      setNotifi(true)
    }
  }

  const deleteItemInCart = (products) => {
    if(products.length === cartInfo.products.length){
      const listOfProducts = {
        idUser: cartInfo.idUser,
        products: []
      }
      dispatch(updateCart(cartInfo.id, listOfProducts, (data) => {}))
    }else{
      const arr = products.map(x => x.id)
      const newCart = cartInfo.products.filter(x => arr.includes(x.productId) === false)

      const listOfProducts = {
        idUser: cartInfo.idUser,
        products: newCart
      }

      dispatch(updateCart(cartInfo.id, listOfProducts, (data) => {}))
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setNotifi(false)
    }, 1500);
    return () => clearTimeout(timeOut)
  }, [notifi]);

  return (
    <div className="checkout__main-body">
      <div className='checkout__main-body-header'>
        <div className='checkout__main-body-header-left'>
          <h3>S???n ph???m</h3>
        </div>
        <div className='checkout__main-body-header-right'>
          <span>Lo???i</span>
          <span>????n gi??</span>
          <span>S??? l?????ng</span>
          <span>Th??nh ti???n</span>
        </div>
      </div>
      <div className='checkout__main-body__list'>
        {
          carts.map(item => {
            const { id, name, image, priceCurrent, amount, type } = item
            
            let total = convertStr(priceCurrent) * amount
            total = covert(total)

            return (
              <div key={id} className="checkout__main-body__item">
                <div className='checkout__main-body__list-left'>
                  <img className='checkout__main-body__list-left__img' src={image} alt="" />
                  <span className='checkout__main-body__list-left__name'>{name}</span>
                </div>
                <div className='checkout__main-body__list-right'>
                  <span>{type}</span>
                  <span>???{priceCurrent}</span>
                  <span>{amount}</span>
                  <span>???{total}</span>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className='checkout__main-body__footer'>
        <div className='checkout__main-body__footer-list'>
          <div className='checkout__main-body__footer-item'>
            <span>T???ng ti???n h??ng:</span>
            <span>???{itemsPrice}</span>
          </div>
          <div className='checkout__main-body__footer-item'>
            <span>Ph?? v???n chuy???n:</span>
            <span>???{shippingPrice}</span>
          </div>
          <div className='checkout__main-body__footer-item'>
            <span>T???ng thanh to??n:</span>
            <span className='main-body__footer-item--highlight'>???{totalPrice}</span>
          </div>
        </div>
        <div className='body__footer-item-btn'>
          <button onClick={confirm} className={`btn btn--primary ${check === false && 'btn--disabled'}`}>?????t h??ng</button>
        </div>
      </div>
      {
        check && notifi && <NotifiModal text='?????t h??ng th??nh c??ng' type='successful' />
      }
      {
        check === false && notifi && <NotifiModal text='Ch??a c?? ?????a ch??? giao h??ng' type='warning' />
      }
    </div>
  );
};


export default CheckoutItems;