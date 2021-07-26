import React from 'react';
import {MdPayment} from 'react-icons/md'
import { GiShoppingCart } from 'react-icons/gi'
import {FaShippingFast} from 'react-icons/fa'
import {WiStars} from 'react-icons/wi'

const HeaderSecond = ({text, type}) => {
  return (
    <div className='sale__header'>
      <div className='sale__header-left'>
        <i className='sale__header-left-icon'>{type === 'cart' ? <GiShoppingCart/> : <MdPayment />}</i>
        <h3 className='sale__header-left-content'>{text}</h3>
      </div>
      <div className='sale__header-right'>
        <i className='sale__header-right-pin' ><WiStars /></i>
        <div className='sale__header-right__freeship-icon'>
          <i><FaShippingFast /></i>
        </div>
        <div className='sale__header-right__freeship-content'>
          <span>Miễm phí giao hàng với đơn hàng từ ₫2.000.000</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderSecond;