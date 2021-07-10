import React, { useState } from 'react';

const ModalCheckout = ({ setShowModal }) => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    address: '',
    address_detail: ''
  })

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="modal__body">
      <div className='modal-checkout__content'>
        <h2 className='modal-checkout__content-title'>Thêm địa chỉ</h2>
        <div className="modal-checkout__content__group modal-checkout__content__group-1">
          <div className={`modal-checkout__content__group-wrap ${state.name === '' ? null : 'placeholder--active'}`}>
            <div className='modal-checkout__content__group__placeholder'>Họ và tên</div>
            <input
              className='modal-checkout__content__group-1__input'
              name='name'
              type="text"
              placeholder='Họ và tên'
              onChange={onChangeInput}
            />
          </div>
          <div className={`modal-checkout__content__group-wrap ${state.phone === '' ? null : 'placeholder--active'}`}>
            <div className='modal-checkout__content__group__placeholder'>Số điện thoại</div>
            <input
              className='modal-checkout__content__group-1__input'
              name='phone'
              type="text"
              placeholder='Số điện thoại'
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className='modal-checkout__content__group'>
          <div className={`modal-checkout__content__group-wrap ${state.address === '' ? null : 'placeholder--active'}`}>
            <div className='modal-checkout__content__group__placeholder'>Tỉnh/thành phố, Quận/Huyện, Phường/Xã</div>
            <input
              className='modal-checkout__content__group-3-input'
              name='address'
              type="text"
              placeholder='Tỉnh/thành phố, Quận/Huyện, Phường/Xã'
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className='modal-checkout__content__group'>
          <div className={`modal-checkout__content__group-wrap ${state.address_detail === '' ? null : 'placeholder--active'}`}>
            <div className='modal-checkout__content__group__placeholder'>Địa chỉ cụ thể</div>
            <input
              className='modal-checkout__content__group-3-input'
              placeholder='Địa chỉ cụ thể'
              name="address_detail"
              type="text"
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className="auth-form__controls">
          <button onClick={e => setShowModal(false)} className="btn btn--normal auth-form__controls-back">TRỞ LẠI</button>
          <button className="btn btn--primary">HOÀN THÀNH</button>
        </div>
      </div>
    </div>
  );
};


export default ModalCheckout;