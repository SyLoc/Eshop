import React, { useState, useEffect } from 'react';
import { MdPayment, MdPlace } from 'react-icons/md'
import {FaShippingFast} from 'react-icons/fa'
import {WiStars} from 'react-icons/wi'
import '../css/checkout.css'
import Footer from '../components/footer/Footer'
import ModalCheckout from '../components/modals/ModalCheckout';
import CheckoutItems from '../components/cart/checkout.items';

const Checkout = () => {
  const [showModal, setShowModal] = useState(false)
  const [carts, setCarts] = useState([])


  useEffect(() => {
    const order = JSON.parse(localStorage.getItem('order'))
    setCarts(order)
  }, []);


  return (
    <section className='grid'>
      <div className='checkout__header'>
        <div className='checkout__header-left'>
          <i className='checkout__header-left-icon'><MdPayment /></i>
          <h3 className='checkout__header-left-content'>Thanh Toán</h3>
        </div>
        <div className='checkout__header-right'>
          <i className='checkout__header-right-pin' ><WiStars/></i>
          <div className='checkout__header-right__freeship-icon'>
            <i><FaShippingFast/></i>
          </div>
          <div className='checkout__header-right__freeship-content'>
            <span>Miễm phí giao hàng với đơn hàng từ ₫2.000.000</span>
          </div>
        </div>
      </div>
      <div className="checkout__main">
        <div className="checkout__main-header">
          <div className='checkout__main-header-lines'></div>
          <div className="checkout__main-header__content">
            <div className='checkout__main-header__content-header'>
              <i><MdPlace /></i>
              <span>Địa chỉ nhận hàng</span>
            </div>
            <div className='checkout__main-header__content-body'>
              <h3>Van Kha (+84) 123456789</h3>
              <span>08 ABC (KTX phía Tây), Phường Hòa Khánh Bắc, Quận Liên Chiểu, Đà Nẵng</span>
              <button type='button' onClick={e => setShowModal(!showModal)}>Thay đổi</button>
            </div>
          </div>
        </div>
        <CheckoutItems carts={carts}/>
      </div>
      <div className={`modal ${showModal ? 'modal--show' : null}`}>
        <div className="modal__overlay"></div>
        <ModalCheckout setShowModal={setShowModal} />
      </div>
      <Footer />
    </section>
  );
};

export default Checkout;