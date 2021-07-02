import React from 'react';
import {FaFacebook, FaInstagram, FaRegBell, FaRegQuestionCircle } from 'react-icons/fa'
import { useDispatch,useSelector} from 'react-redux';

import {OPEN_MODAL, LOGOUT} from '../../constant/constants'

const Navigation = () => { 
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.lo.isLogin);
  const infoCustomer = useSelector(state => state.lo.infoCustomer);

  const handleSignIn = (value) =>{
    dispatch({type: OPEN_MODAL, payload: value})
  }

  const handleSignUp = (value) =>{
    dispatch({type: OPEN_MODAL, payload: value})
  }

  const logOut = () =>{
    dispatch({type: LOGOUT})
  }

  return (
    <article className="header__navbar">
      <ul className="header__navbar-list">
        <li className="header__navbar-item header__navbar-item--showQR header__navbar-item--separation">
          Vào cửa hàng trên ứng dụng Oshop
          <div className="header__qr">
            <img className="header__qr-img" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png" alt="QA-code"/>
            <div className="header__qr-apps">
              <a href="/googlePlay" className="header__qr-link">
                <img className="header__qr-download-img" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png" alt="googlePlay"/>
              </a>
              <a href="/appStore" className="header__qr-link">
                <img className="header__qr-download-img" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png" alt="appStore"/>
              </a>
            </div>
          </div>
        </li>
        <li className="header__navbar-item">
          <span className="header__navbar-item_span">Kết nối</span>
          <a href="/facebook" className="header__navbar-item-social">
            <i className="header__navbar-icon"><FaFacebook/></i>
          </a>
          <a href="/instagram" className="header__navbar-item-social">
            <i className="header__navbar-icon"><FaInstagram/></i>
          </a>
        </li>
      </ul>
      <ul className="header__navbar-list">
        <li className="header__navbar-item header__navbar-item--showNotify">
          <a href="/error" className="header__navbar-item-link">
            <i className="header__navbar-icon"><FaRegBell/></i>
            Thông báo
          </a>
          <div className="header__notify">
            <header className="header__notify-header">
              <h3>Thông báo mới nhận</h3>
            </header>
            <ul className="header__notify-list">
              <li className="header__notify-item">
                <a href="/error" className="header__notify-link">
                  <img className="header__notify-img"
                    src="https://img.abaha.vn/photos/resized/200x120/121-1608210033-demoweb.png" alt=""/>
                  <div className="header__notify-info">
                    <span className="header__notify-name">Chương trình khách hàng thân thiết</span>
                    <span className="header__notify-des">Để cảm ơn sự ủng hộ và yêu thích của khách hàng đối với chúng
                      tôi, chương trình Khách Hàng Thân Thiết đã được ra đời.</span>
                  </div>
                </a>
              </li>
              <li className="header__notify-item">
                <a href="/error" className="header__notify-link">
                  <img className="header__notify-img"
                    src="https://img.abaha.vn/photos/resized/200x120/121-1608210033-demoweb.png" alt=""/>
                  <div className="header__notify-info">
                    <span className="header__notify-name">Chương trình khách hàng thân thiết</span>
                    <span className="header__notify-des">Để cảm ơn sự ủng hộ và yêu thích của khách hàng đối với chúng
                      tôi, chương trình Khách Hàng Thân Thiết đã được ra đời.</span>
                  </div>
                </a>
              </li>
              <li className="header__notify-item header__notify-item--viewed">
                <a href="/error" className="header__notify-link">
                  <img className="header__notify-img"
                    src="https://img.abaha.vn/photos/resized/200x120/121-1608210033-demoweb.png" alt=""/>
                  <div className="header__notify-info">
                    <span className="header__notify-name">Chương trình khách hàng thân thiết</span>
                    <span className="header__notify-des">Để cảm ơn sự ủng hộ và yêu thích của khách hàng đối với chúng
                      tôi, chương trình Khách Hàng Thân Thiết đã được ra đời.</span>
                  </div>
                </a>
              </li>
              <li className="header__notify-item">
                <a href="/error" className="header__notify-link">
                  <img className="header__notify-img"
                    src="https://img.abaha.vn/photos/resized/200x120/121-1608210033-demoweb.png" alt=""/>
                  <div className="header__notify-info">
                    <span className="header__notify-name">Chương trình khách hàng thân thiết</span>
                    <span className="header__notify-des">Để cảm ơn sự ủng hộ và yêu thích của khách hàng đối với chúng
                      tôi, chương trình Khách Hàng Thân Thiết đã được ra đời.</span>
                  </div>
                </a>
              </li>
            </ul>
            <footer className="header__notify-footer">
              <a href="/error" className="header__notify-footer-link">Xem tất cả</a>
            </footer>
          </div>
        </li>
        <li className="header__navbar-item">
          <a href="/error" className="header__navbar-item-link">
            <i className="header__navbar-icon"><FaRegQuestionCircle/></i>
            Trợ giúp
          </a>
        </li>
        {
          isLogin ? 
          (
            <li className="header__navbar-item header__navbar-user">
              <img src="https://png.pngtree.com/png-vector/20190618/ourlarge/pngtree-personalpersonalizationprofileuser-abstract-circle-backgro-png-image_1489146.jpg" alt="avatar" className="header__navbar-user-avatar"/>
              <span className="header__navbar-user-name">
                {infoCustomer.email}
              </span>
  
              <ul className="header__navbar-user-menu">
                <li className="header__navbar-user-item">
                  <a href="/error">Tài khoản của tôi</a>
                </li>
                <li className="header__navbar-user-item">
                  <a href="/error">Địa chỉ của tôi</a>
                </li>
                <li className="header__navbar-user-item">
                  <a href="/error">Đơn mua</a>
                </li>
                <li className="header__navbar-user-item">
                  <button onClick={logOut}>Đăng xuất</button>
                </li>
              </ul>
          </li>
          )
          :
          (
            <>
              <li onClick={e => handleSignIn('signIn')} className="header__navbar-item header__navbar-item--bold header__navbar-item--separation">Đăng nhập</li>
              <li onClick={e => handleSignUp('signUp')} className="header__navbar-item header__navbar-item--bold">Đăng ký</li>
            </>
          )
        }
      </ul>
    </article>
  );
};

export default Navigation;