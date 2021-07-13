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
              className='modal-checkout__content__group-2-input'
              name='address'
              type="text"
              placeholder='Tỉnh/thành phố, Quận/Huyện, Phường/Xã'
              onChange={onChangeInput}
            />

            <div className='content__group-2_modal-wrap'>
              <div className='content__group-2_modal'>
                <div className='content__group-2_modal-header'>
                  <div className='content__group-2_modal-header-item modal-header-item--active'>Tỉnh/thành phố</div>
                  <div className='content__group-2_modal-header-item '>Quận/Huyện</div>
                  <div className='content__group-2_modal-header-item'>Phường/Xã</div>
                </div>
                <div className='content__group-2_modal-body'>
                  <div className='content__group-2_modal-body-item'>Hà nội</div>
                  <div className='content__group-2_modal-body-item'>Đà nẵng</div>
                  <div className='content__group-2_modal-body-item'>TPHCM</div>
                  <div className='content__group-2_modal-body-item'>Đà lạt</div>
                  <div className='content__group-2_modal-body-item'>Hà nội</div>
                  <div className='content__group-2_modal-body-item'>Đà nẵng</div>
                  <div className='content__group-2_modal-body-item'>TPHCM</div>
                  <div className='content__group-2_modal-body-item'>Đà lạt</div>
                  <div className='content__group-2_modal-body-item'>Hà nội</div>
                  <div className='content__group-2_modal-body-item'>Đà nẵng</div>
                  <div className='content__group-2_modal-body-item'>TPHCM</div>
                  <div className='content__group-2_modal-body-item'>Đà lạt</div>
                </div>
              </div>
            </div>
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

        <div className='modal-checkout__content__group'>
          <img className='modal-checkout__content__group-img' src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2018/08/Google-Maps.jpeg?fit=950%2C475&ssl=1" alt="" />
        </div>

        <div className="auth-form__controls auth-form__controls--size-s">
          <button onClick={e => setShowModal(false)} className="btn btn--normal auth-form__controls-back">TRỞ LẠI</button>
          <button className="btn btn--primary">HOÀN THÀNH</button>
        </div>
      </div>
    </div>
  );
};


export default ModalCheckout;