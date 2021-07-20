import React, { useState, useEffect } from 'react';
import { MdPayment } from 'react-icons/md'
import '../css/checkout.css'
import { MdPlace } from 'react-icons/md'
import Footer from '../components/footer/Footer'
import ModalCheckout from '../components/modals/ModalCheckout';

const Checkout = () => {
  const [showModal, setShowModal] = useState(false)
  const [carts, setCarts] = useState([])


  useEffect(() => {
    const order = JSON.parse(localStorage.getItem('order'))
    setCarts(order)
    console.log(order)
  }, []);


  return (
    <section className='grid'>
      <div className='checkout__header'>
        <i className='checkout__header-icon'><MdPayment /></i>
        <h3 className='checkout__header-content'>Thanh Toán</h3>
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
        <div className="checkout__main-body">
          <div className='checkout__main-body-header'>
            <div className='checkout__main-body-header-left'>
              <h3>Sản phẩm</h3>
            </div>
            <div className='checkout__main-body-header-right'>
              <span>Loại</span>
              <span>Đơn giá</span>
              <span>Số lượng</span>
              <span>Thành tiền</span>
            </div>
          </div>
          <div className='checkout__main-body__list'>
            {
              carts.map(item => {
                const {id, name, image, priceCurrent, amount, type} = item
                return (
                  <div key={id} className="checkout__main-body__item">
                    <div className='checkout__main-body__list-left'>
                      <img className='checkout__main-body__list-left__img' src={image} alt="" />
                      <span className='checkout__main-body__list-left__name'>{name}</span>
                    </div>
                    <div className='checkout__main-body__list-right'>
                      <span>{type}</span>
                      <span>₫{priceCurrent}</span>
                      <span>{amount}</span>
                      <span>₫{priceCurrent * amount}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className='checkout__main-body__footer'>
            <div className='checkout__main-body__footer-list'>
              <div className='checkout__main-body__footer-item'>
                <span>Tổng tiền hàng</span>
                <span>₫56.500</span>
              </div>
              <div className='checkout__main-body__footer-item'>
                <span>Phí vận chuyển</span>
                <span>₫70.400</span>
              </div>
              <div className='checkout__main-body__footer-item'>
                <span>Tổng thanh toán:</span>
                <span className='main-body__footer-item--highlight'>₫126.900</span>
              </div>
            </div>
            <div className='body__footer-item-btn'>
              <button className='btn btn--primary'>Đặt hàng</button>
            </div>
          </div>
        </div>
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