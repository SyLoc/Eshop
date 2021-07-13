import React, { useState, useEffect } from 'react';
import { GiShoppingCart } from 'react-icons/gi'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../css/cart.css'
import Footer from '../components/footer/Footer';




const Cart = () => {
  const [carts, setCarts] = useState([])
  const [openX, setOpenX] = useState('')

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('carts')) || []
    setCarts(cart)
  }, []);

  const handleChangeInput = () => {

  }

  const handleClick = (id) =>{
    console.log(id)
    setOpenX(id)
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
            {
              carts.map((item, index) => {
                const {id, name, image, priceCurrent, amount} = item
                // console.log(parseInt(priceCurrent))
                return (
                  <div key={index} className="cart__main-container__item">
                    <div className='cart__main-container__item-checkbox'>
                      <input className='cart__main-header__check' type="checkbox" />
                    </div>
                    <div className='cart__main-container__item-product'>
                      <a href='/abc' className='cart__main-container__item-product-link'>
                        <img className='container__item__product-img' src={image} alt="" />
                        <div className='container__item__product-name__wrap'>
                          <div className='container__item__product-name'>{name}</div>
                        </div>
                      </a>
                    </div>
                    <div className={`cart__main-container__item-category ${openX === id ? 'cart__main-container__item-category--active' : null}`}>
                      {/* cart__main-container__item-category--active */}
                      <div className='container__item-category__header'>
                        <span>Phân loại hàng: </span>
                        <div onClick={e => handleClick(id)}>
                          <button className='container__item-category__header-btnDown'><MdArrowDropDown /></button>
                          <button className='container__item-category__header-btnUp'><MdArrowDropUp /></button>
                        </div>
                      </div>
                      <div className='container__item-category__content'>
                        <span>ĐEN</span>
                      </div>
                      <div className='container__item-category__modal' >
                        <span className='container__item-category__modal-title'>Loại: </span>
                        <ul className='container__item-category__modal-list'>
                          <li className='container__item-category__modal-item category__modal-item--active'>
                            <button className='container__item-category__modal-item-btn' >ĐEN</button>
                            <div className='container__item-category__modal-item-icon'><BiCheck /></div>
                          </li>
                          <li className='container__item-category__modal-item '>
                            <button className='container__item-category__modal-item-btn' >TRẮNG</button>
                            <div className='container__item-category__modal-item-icon'><BiCheck /></div>
                          </li>
                          <li className='container__item-category__modal-item'>
                            <button className='container__item-category__modal-item-btn' >VÀNG</button>
                            <div className='container__item-category__modal-item-icon'><BiCheck /></div>
                          </li>
                        </ul>
                        <div className='container__item-category__modal-buttons'>
                          <button onClick={e => setOpenX('')} className='btn btn--normal'>Trở lại</button>
                          <button className='btn btn--primary'>Xác nhận</button>
                        </div>
                      </div>
                    </div>
                    <div className='cart__main-container__item-price'>
                      <span>{priceCurrent}</span>
                    </div>
                    <div className='cart__main-container__item-amount'>
                      <div className='container__item-amount-wrap'>
                        <button className="container__item-amount-btn container__item-amount-decrease">
                          <i><AiOutlineMinus /></i>
                        </button>
                        <input onChange={handleChangeInput} className='container__item-amount-input' defaultValue={amount} type="text" />
                        <button className="container__item-amount-btn container__item-amount-increase">
                          <i><AiOutlinePlus /></i>
                        </button>
                      </div>
                    </div>
                    <div className='cart__main-container__item-total'>
                      <span>{priceCurrent}</span>
                    </div>
                    <div className='cart__main-container__item-manipulation'>
                      <button>Xóa</button>
                    </div>
                  </div>
                )
              })
            }
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