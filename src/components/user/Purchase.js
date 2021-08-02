import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../../css/user.css'
import avata from '../../assets/img/avata.jpg'
import { BiNotepad } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'

import { useSelector } from 'react-redux'

const Purchase = () => {
  const orderAll = useSelector(state => state.sale.order);
  const [order, setOrder] = useState([])

  useEffect(() => {
    const infoCus = JSON.parse(localStorage.getItem('login'))
    const arr = orderAll.filter(x => x.infoUser.id === infoCus.id)
    setOrder(arr)
  }, [orderAll]);

  return (
    <main className="container grid">
      <section className="grid__row container__content">
        <div className="grid__column-2">
          <div className='purchase__sidebar'>
            <div className="purchase__sidebar-profile">
              <img src={avata} className="purchase__sidebar-img" alt="avata" />
              <div className="purchase__sidebar-name">phan hai</div>
              {/* <div className="purchase__sidebar-info">
                <div className="purchase__sidebar-info__name">phan hai</div>
                <div className="purchase__sidebar-info__name">phan hai</div>
              </div> */}
            </div>
            <ul className='purchase__sidebar-list'>
              <li className='purchase__sidebar-item'>
                <i className='purchase__sidebar-icon' ><BsPerson /></i>
                <Link className='purchase__sidebar-item__link' to='/account'>tài khoản của tôi</Link>
              </li>
              <li className='purchase__sidebar-item purchase__sidebar-item--active'>
                <i className='purchase__sidebar-icon' ><BiNotepad /></i>
                <Link className='purchase__sidebar-item__link' to='/purchase'>đơn mua</Link>
              </li>
              <li className='purchase__sidebar-item'>
                <i className='purchase__sidebar-icon' ><MdNotificationsNone /></i>
                <Link className='purchase__sidebar-item__link' to='/notifications'>thông báo</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid__column-10">
          <div className='purchase__content'>
            <ul className="purchase-header_list">
              <li className="purchase-header_item purchase-header_item--active">
                <div className="purchase-header__text" >Chờ xác nhận</div>
              </li>
              <li className="purchase-header_item">
                <div className="purchase-header__text">Đang giao</div>
              </li>
              <li className="purchase-header_item">
                <div className="purchase-header__text" >Đã giao</div>
              </li>
              <li className="purchase-header_item">
                <div className="purchase-header__text" >Đã hủy</div>
              </li>
            </ul>

            <div className="purchase-main">
              {
                order.map((item, index) => {
                  return (
                    <div key={index} className="purchase-item-wrap">
                      {
                        item.products.map(x => {
                          const {id,name,image,type,amount,priceOld, priceCurrent} = x
                          return (
                            <div key={id} className="purchase-item">
                              <div className="purchase-item__left">
                                <div className="purchase-item__image">
                                  <div
                                    style={{ backgroundImage: `url(${image})` }}
                                    className="purchase-item__img" alt="" />
                                </div>
                                <Link to='/abc' className="purchase-item__info">
                                  <div className="purchase-item__info-name">{name}</div>
                                  <div className="purchase-item__info-type">loại: {type}</div>
                                  <div className="purchase-item__info-quantity">x{amount}</div>
                                </Link>
                              </div>
                              <div className="purchase-item__right">
                                <div className='purchase-item__right-oldPrice'>₫{priceOld}</div>
                                <div className='purchase-item__right-currentPrice'>₫{priceCurrent}</div>
                              </div>
                            </div>
                          )
                        })
                      }
                      <div className='purchase-item__extension'>
                        <div className='purchase-item__extension-price'>Tổng số tiền: <span>₫{item.total.totalPrice}</span></div>
                        <button className='btn btn--primary'>HỦY ĐƠN HÀNG</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </main>
  );
};


export default Purchase;