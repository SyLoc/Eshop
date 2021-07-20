
import React, { useState } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const CartItems = ({ carts, decrease, increase, checkInput, covert, convertStr, deleteItem, setType }) => {
  const [openX, setOpenX] = useState('')
  const [productType, setProductType] = useState('')

  const handleClick = (id, x) => {
    setOpenX(id)
    setProductType(x)
  }

  const checkType = (name) =>{
    setProductType(name)
  }

  const confirm = (a,b) =>{
    setType(a,b)
    setOpenX('')
  }


  return (
    <>
      {
        carts.map((item) => {
          const { id, name, image, priceCurrent, amount, types, type} = item

          let total = convertStr(priceCurrent) * amount
          total = covert(total)
          return (
            <div key={id} className="cart__main-container__item">
              <div className='cart__main-container__item-left'>
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

                <div className={`cart__main-container__item-category ${types.length > 0 && 'item-category--show'} ${openX === id ? 'cart__main-container__item-category--active' : null}`}>
                  <div className='container__item-category__header'>
                    <span>Phân loại hàng: </span>
                    <div onClick={e => handleClick(id, type)}>
                      <button className='container__item-category__header-btnDown'><MdArrowDropDown /></button>
                      <button className='container__item-category__header-btnUp'><MdArrowDropUp /></button>
                    </div>
                  </div>

                  <div className='container__item-category__content'>
                    <span>{type}</span>
                  </div>

                  <div className='container__item-category__modal' >
                    <span className='container__item-category__modal-title'>Loại: </span>
                    {/* container__item-category__modal-list */}
                    <ul className='category__list'>
                      {
                        types.map((item, index) =>{
                          return (
                            <li key={index} className={`category__item ${productType === item && 'category__item--active'}`}>
                              {/* category__modal-item--active */}
                              <button onClick={e => checkType(item)} className='category__item-btn' >{item}</button>
                              <div className='category__item-icon'><BiCheck /></div>
                            </li>
                          )
                        })
                      }
                    </ul>
                    <div className='container__item-category__modal-buttons'>
                      <button onClick={e => setOpenX('')} className='btn btn--normal'>Trở lại</button>
                      <button onClick={e => confirm(id, productType)} className='btn btn--primary'>Xác nhận</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='cart__main-container__item-right'>

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
            </div>
          )
        })
      }</>
  );
};


export default CartItems;