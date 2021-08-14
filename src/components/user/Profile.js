import React, { useState, useEffect, useRef } from 'react';
import '../../css/user.css'
import UploadImage from './userChildren/uploadImage';
import ModalCheckout from '../modals/ModalCheckout';

import {UpdateUser} from '../../actions/ActionWithProduct'
import { useDispatch } from 'react-redux';

const Profile = ({infoUser}) => {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  useOnClickOutside(ref, () => ref.current.size = '0');
  useOnClickOutside(ref1, () => ref1.current.size = '0');
  useOnClickOutside(ref2, () => ref2.current.size = '0');

  const [info, setInfo] = useState({ gender: 'khác', date: '1', month: '1', year: '1999' })
  const options = { date: 31, month: 12, year: new Date().getFullYear() - 1949 }

  const [showModal, setShowModal] = useState(false)
  const [noInfo, setNoInfo] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if(infoUser.address === ''){
      setNoInfo(true)
    }
  }, [infoUser]);

  useEffect(() => {
    if(infoUser.info_1 !== undefined){
      setInfo({ 
        gender: infoUser.info_1.gender,
        date: infoUser.info_1.date,
        month: infoUser.info_1.month,
        year: infoUser.info_1.year
      })
    }
  }, [infoUser]);


  const handleSave = () =>{
    const payload = {
      ...infoUser,
      info_1:info
    }
    dispatch(UpdateUser(infoUser.id,payload))
    alert('Lưu thông tin thành công')
  }


  // Hook
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }

  return (
    <div className="account-content">
      <div className="account-content__header">
        <h1 className="account-content__header-title">Hồ Sơ Của Tôi</h1>
        <p className="account-content__header-p">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className="account-content__body">
        <div className="account-content__body-left">
          <div className='account-content__body-left-item'>
            <h3 className='account-content__body-left-label'>Tên/Email Đăng Nhập</h3>
            <span>{infoUser.name ? infoUser.name : infoUser.email}</span>
          </div>
          <div className='account-content__body-left-item'>
            <h3 className='account-content__body-left-label'>Tên giao hàng </h3>
            <span>{infoUser.name_2}</span>
          </div>
          <div className='account-content__body-left-item'>
            <h3 className='account-content__body-left-label'>Số điện thoại </h3>
            <span>{infoUser.phone}</span>
          </div>
          <div className='account-content__body-left-item'>
            <h3 className='account-content__body-left-label'>Địa chỉ </h3>
            <span>{infoUser.address_detail}, {infoUser.address}</span>
          </div>
          <button onClick={e => setShowModal(true)} className='account-btn'>{noInfo ? 'thêm địa chỉ' : 'thay đổi'}</button>
          <div className="account-content__body-left__select">
            <div className="account-content__body-left__select-first">
              <h3 className='account-content__body-left-label'>giới tính </h3>
              {/* onChange={e => setInfo({...info, gender:e.target.value}) } */}
              <select onChange={e => setInfo({ ...info, gender: e.target.value })} value={info.gender} className="account-content__body-left__select-content" name="" id="">
                <option value="nam">Nam</option>
                <option value="nữ">Nữ</option>
                <option value="khác">Khác</option>
              </select>

            </div>
            <div className="account-content__body-left__select-second">
              <h3 className='account-content__body-left-label'>ngày sinh </h3>

              <div className='account-content__body-left__select-second__content'>
                <select ref={ref} onChange={e => { setInfo({ ...info, date: e.target.value }); e.target.size = '0' }}
                  value={info.date} className="account-content__body-left__select-content select-content-123" onMouseDown={e => { options.date > 5 && (e.target.size = '5') }}>
                  {
                    [...Array(options.date)].map((x, index) => {
                      return <option key={index} value={index + 1}>{index + 1}</option>
                    })
                  }
                </select>

                <select ref={ref1} onChange={e => { setInfo({ ...info, month: e.target.value }); e.target.size = '0' }}
                  value={info.month} className="account-content__body-left__select-content select-content-345" onMouseDown={e => { options.month > 5 && (e.target.size = '5') }}>
                  {
                    [...Array(options.month)].map((x, index) => {
                      return <option key={index} value={`${index + 1}`}>{`Tháng ${index + 1}`}</option>
                    })
                  }
                </select>

                <select ref={ref2} onChange={e => { setInfo({ ...info, year: e.target.value }); e.target.size = '0' }}
                  value={info.year} className="account-content__body-left__select-content select-content-456" onMouseDown={e => { options.year > 5 && (e.target.size = '5') }}>
                  {
                    [...Array(options.year)].map((x, index) => {
                      return <option key={index} value={1950 + index}>{1950 + index}</option>
                    })
                  }
                </select>
              </div>

            </div>
            <button onClick={handleSave} className='account-btn'>lưu</button>
          </div>
        </div>
        <UploadImage infoUser={infoUser} />
      </div>
      <div className="account-content__footer">

      </div>
      <div className={`modal ${showModal ? 'modal--show' : null}`}>
        <div className="modal__overlay"></div>
        <ModalCheckout setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Profile;