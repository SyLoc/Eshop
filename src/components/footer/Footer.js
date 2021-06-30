import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import "../../css/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid">
        <div className="grid__row">
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Chăm sóc khách hàng</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">Trung tâm trợ giúp</a>
              </li>
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">TickID Mail</a>
              </li>
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">Hướng dẫn mua hàng</a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Giới thiệu</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">Giới thiệu về TickID việt nam</a>
              </li>
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">Tuyển dụng</a>
              </li>
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">Điều khoản TickID</a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Danh mục</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">Thời trang</a>
              </li>
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">Sản phẩm công nghệ</a>
              </li>
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">Sản phẩm nội thất</a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Theo dõi chúng tôi</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">
                  <i className="footer__list-item-icon"><FaFacebook/></i>
                  facebook
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">
                  <i className="footer__list-item-icon"><FaInstagram/></i>
                  Instagram
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/footer" className="footer__list-item__link">
                  <i className="footer__list-item-icon"><FaLinkedin/></i>
                  Linkedln
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
            <div className="footer__download">
              <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png" alt="download-qr" className="footer__download-qr"/>
              <div className="footer__download-apps">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png" className="footer__download-apps-img" alt="appStore"/>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png" className="footer__download-apps-img" alt="googlePlay"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid__bottom">
        <div className="grid">
          <h2 className="footer-text">&copy; 2021 - Công ty mỹ phẩm Ohui- LGvina</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;