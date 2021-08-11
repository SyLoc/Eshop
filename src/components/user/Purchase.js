import React, { useState, useEffect } from 'react';
import '../../css/user.css'
import { useSelector } from 'react-redux'
import PurchaseItem from './userChildren/purchase.item';

import { btnStatus } from '../../link/linkList'
const Purchase = () => {
  const orderAll = useSelector(state => state.sale.order);
  const [order, setOrder] = useState([[]])
  const [value, setValue] = useState(0)
  const [noti, setNoti] = useState(false)


  useEffect(() => {
    const infoCus = JSON.parse(localStorage.getItem('login'))
    const arr = orderAll.filter(x => x.infoUser.idUser === infoCus.id)

    const value = {
      unconfirmed: [],
      delivering: [],
      delivered: [],
      canceled: []
    }

    arr.forEach(item => {
      switch (item.status) {
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

    const array = [value.unconfirmed, value.delivering, value.delivered, value.canceled]
    setOrder(array)
    setNoti(true)
  }, [orderAll]);


  return (
    <div className='purchase__content'>
      {/* purchase-header_item--active */}
      <ul className="purchase-header_list">
        {
          btnStatus.map((item) => {
            return (
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
        <PurchaseItem prop={order[value]} />
      </div>
    </div>
  );
};


export default Purchase;