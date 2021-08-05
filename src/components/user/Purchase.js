import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../../css/user.css'
import avata from '../../assets/img/avata.jpg'
import { BsPerson } from 'react-icons/bs'
import { BiNotepad } from 'react-icons/bi'
import { MdNotificationsNone } from 'react-icons/md'

import { useSelector } from 'react-redux'
import PurchaseItem from './userChildren/purchase.item';

import { btnStatus } from '../../link/linkList'

const Purchase = () => {
  const orderAll = useSelector(state => state.sale.order);
  const [order, setOrder] = useState([[]])
  const [infoCus, setInfoCus] = useState({})
  const [value, setValue] = useState(0)
  const [noti, setNoti] = useState(false)


  useEffect(() => {
    const infoCus = JSON.parse(localStorage.getItem('login'))
    console.log(infoCus)
    setInfoCus(infoCus)
    const arr = orderAll.filter(x => x.infoUser.idUser === infoCus.id)

    const value = {
      unconfirmed:[],
      delivering:[],
      delivered:[],
      canceled:[]
    }

    arr.forEach(item => {
      switch(item.status){
        case 'unconfirmed': 
          value.unconfirmed.push(item)
          break;
        case 'delivering': 
          value.delivering.push(item)
          break;
        case 'delivered': 
          value.delivered.push(item)
          break;
        case 'canceled': 
          value.canceled.push(item)
          break;
        default:
          return item
      }
    })

    const array = [value.unconfirmed,value.delivering,value.delivered,value.canceled]
    setOrder(array)
    setNoti(true)
  }, [orderAll]);


  return (
    <main className="container grid">
      <section className="grid__row container__content">
        <div className="grid__column-2">
          <div className='purchase__sidebar'>
            <div className="purchase__sidebar-profile">
              <img 
                src={infoCus.img !== '' ? infoCus.img : avata} 
                className="purchase__sidebar-img" 
                alt="avata" />
              <div className="purchase__sidebar-name">{infoCus.name}</div>
              
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
            {/* purchase-header_item--active */}
            <ul className="purchase-header_list">
              {
                btnStatus.map((item) =>{
                  return(
                    <li key={item.id} onClick={e => setValue(item.id)} className={`purchase-header_item ${value === item.id && 'purchase-header_item--active'}`}>
                      <div className="purchase-header__text">{item.content}</div>
                      {

                        noti && order[item.id].length !== 0 && <span className="purchase-header__num">{order[item.id].length}</span>
                      }
                    </li>
                  )
                })
              }
            </ul>

            <div className="purchase-main">
              <PurchaseItem prop={order[value]}/>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </main>
  );
};


export default Purchase;