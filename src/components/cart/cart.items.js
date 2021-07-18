
import React, { useState } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const CartItems = ({carts, decrease, increase, checkInput, covert, convertStr, deleteItem}) => {
  const [openX, setOpenX] = useState('')

  const handleClick = (id) => {
    setOpenX(id)
  }

  return (
    <> 
    {/* { checkAll ? boolean = true : boolean = false} */}
    {
      carts.map((item) => {
        const { id, name, image, priceCurrent, amount } = item
        
        let total = convertStr(priceCurrent)*amount
            total = covert(total)
        return (
          <div key={id} className="cart__main-container__item">
            <div className='cart__main-container__item-checkbox'>
              <input 
                
                onChange={checkInput} name={id} className='cart__main-header__check' type="checkbox" />
            </div>
            <div className='cart__main-container__item-product'>
              <Link to={`/singleProduct/${id}`} className='cart__main-container__item-product-link'>
                <img className='container__item__product-img' src={image} alt="" />
                <div className='container__item__product-name__wrap'>
                  <div className='container__item__product-name'>{name}</div>
                </div>
              </Link>
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
              <span>₫{priceCurrent}</span>
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
              <span>₫{total}</span>
            </div>

            <div className='cart__main-container__item-manipulation'>
              <button onClick={e => deleteItem(id)} >Xóa</button>
            </div>
          </div>
        )
      })
    }</>
  );
};


export default CartItems;