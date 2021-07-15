
import React, { useState } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'

const CartItems = ({carts, decrease, increase}) => {
  const [openX, setOpenX] = useState('')



  const totalize = (price, amount) => {
    let result = Number(price.split('.').join('')) * amount
    result = String(result).split('')
    let count = 0;
    const arr = []
    for (let i = result.length - 1; i >= 0; i--) {
      count++;
      if (count === 3) {
        count = 0;
        if (i !== 0) {
          arr.unshift('.' + result[i])
        } else {
          arr.unshift(result[i])
        }
      } else {
        arr.unshift(result[i])
      }
    }
    return arr.join('')
  }

  const handleClick = (id) => {
    setOpenX(id)
  }


  return (
    <>{
      carts.map((item) => {
        const { id, name, image, priceCurrent, amount } = item
        const total = totalize(priceCurrent, amount)
        return (
          <div key={id} className="cart__main-container__item">
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
                <button onClick={e => decrease(item)} className="container__item-amount-btn container__item-amount-decrease">
                  <i><AiOutlineMinus /></i>
                </button>
                <input readOnly className='container__item-amount-input' value={amount} type="text" />
                <button onClick={e => increase(item)} className="container__item-amount-btn container__item-amount-increase">
                  <i><AiOutlinePlus /></i>
                </button>
              </div>
            </div>

            <div className='cart__main-container__item-total'>
              <span>{total}</span>
            </div>

            <div className='cart__main-container__item-manipulation'>
              <button>Xóa</button>
            </div>
          </div>
        )
      })
    }</>
  );
};


export default CartItems;