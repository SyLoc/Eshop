import React, { useState, useEffect } from 'react';
import {MdPlace } from 'react-icons/md'
import {HiOutlineLightBulb} from 'react-icons/hi'
import '../css/checkout.css'
import Footer from '../components/footer/Footer'
import ModalCheckout from '../components/modals/ModalCheckout';
import CheckoutItems from '../components/cart/checkout.items';
import {useSelector} from 'react-redux'
import HeaderSecond from '../components/header/HeaderSecond';

const Checkout = () => {
  const [showModal, setShowModal] = useState(false)
  const [carts, setCarts] = useState([])
  const [infoCustomer, setInfoCustomer] = useState({address:''});
  const userCurrent = useSelector(state => state.lo.userCurrent);
  const users = useSelector(state => state.lo.users);

  useEffect(() => {

    const infoUser = userCurrent.address === undefined ? users.find(user => user.idUser === userCurrent.id) : userCurrent
    setInfoCustomer(infoUser)
  }, [userCurrent,users]);


  useEffect(() => {
    const order = JSON.parse(localStorage.getItem('order'))
    setCarts(order)
  }, []);

  return (
    <section className='grid'>
      <HeaderSecond text={'Thanh toán'}/>
      <div className="checkout__main">
        <div className="checkout__main-header">
          <div className='checkout__main-header-lines'></div>
          <div className="checkout__main-header__content">
            <div className='checkout__main-header__content-header'>
              <i><MdPlace /></i>
              <span>Địa chỉ nhận hàng</span>
            </div>

            <div className={`checkout__main-header__content-body ${infoCustomer.address !== '' && 'header__content-body--active'}`}>
              {/* header__content-body--active */}
              <div className='checkout__main-header__content-body__no-address'>
                <p><i><HiOutlineLightBulb/></i> Chưa có địa chỉ nhận hàng, xin hãy nhập thông tin để chúng tôi có thể giao hàng</p>
              </div>

              <div className='checkout__main-header__content-body__address'>
                <h3>{infoCustomer.name_2} (+84) {infoCustomer.phone}</h3>
                <span>{infoCustomer.address_detail}, {infoCustomer.address}</span>
              </div>

              <button type='button' onClick={e => setShowModal(!showModal)}>{infoCustomer.phone !== '' ? 'Thay đổi': 'Thêm mới'}</button>
            </div>
          </div>
        </div>
        <CheckoutItems infoCustomer={infoCustomer} carts={carts}/>
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