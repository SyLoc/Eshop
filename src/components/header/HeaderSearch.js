import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SEARCH_TERM } from '../../constant/constants'
import NotifiModal from '../modals/NotifiModal'


const HeaderSearch = ({cart}) => {
  const [SearchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const isLogin = useSelector(state => state.lo.isLogin);
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: SEARCH_TERM, payload: SearchTerm })
    setSearchTerm("")
  }

  const handleClick = () => {
    setOpenModal(true)
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOpenModal(false)
    }, 2000);
    return () => clearTimeout(timeOut)
  }, [openModal]);


  return (
    <article className="header-with-search" onSubmit={handleSubmit}>
      <div className="header__logo">
        <a href="/" className="header__logo-link">
          <img src='https://theme.hstatic.net/1000150581/1000532738/14/logo.png?v=2324' className="header__logo-img" alt="" />
        </a>
      </div>

      <form className="header__search">
        <div className="header__search-input-wrap">
          <input
            type="text"
            className="header__search-input"
            placeholder="Tìm kiếm sản phẩm"
            value={SearchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          {/* <!-- search history --> */}
          <div className="header__search-history">
            <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
            <ul className="header__search-history-list">
              <li className="header__search-history-item">
                <a href="/daugoi">Dầu gội đầu</a>
              </li>
              <li className="header__search-history-item">
                <a href="/kemtron">Kem trộn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__search-select">
          <span className="header__search-select-label">Trong shop</span>
          <i className="header__search-select-icon"><FaAngleDown /></i>

          <ul className="header__search-option">
            <li className="header__search-option-item header__search-option-item--active">
              <span>Trong shop</span>
              <i className="fas fa-check"></i>
            </li>
            {/* <li className="header__search-option-item">
              <span>Ngoài shop</span>
              <i className="fas fa-check"></i>
            </li> */}
          </ul>

        </div>
        <button className="header__search-btn">
          <i className="header__search-btn-icon"><FaSearch /></i>
        </button>
      </form>

      {/* <!-- cart --> */}
      <div className="header__cart">
        <Link onClick={handleClick} to='/cart' className="header__cart-wrap">
          <i className="header__cart-icon"><FaShoppingCart /></i>
          {
            isLogin ? <span className='header__cart-length'>{cart.length}</span> : null
          }

          <div className={`header__cart-list ${isLogin === false || cart.length === 0 ? 'header__cart-list--no-cart' : null}`}>
            {/* <!-- nocart : header__cart-list--no-cart --> */}
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png" alt="no_cart" className="header__cart-no-cart-img" />
            <h3 className="header__cart-under-title">Chưa có sản phẩm</h3>

            <div className="header__cart--list-products">
              <h3 className="header__cart-heading">Sản phẩm đã thêm</h3>
              <ul className="header__cart-list-item">
                {/* <!-- Cart item --> */}
                {
                  cart.map(item => {
                    const { id, name, image, amount, priceCurrent, type } = item
                    return (
                      <li key={id} className="header__cart-item">
                        <img className="header__cart-item-img" src={image} alt="" />
                        <div className="header__cart-item-info">
                          <div className="header__cart-item-head">
                            <h5 className="header__cart-item-name">{name}</h5>
                            <div className="header__cart-item-price-wrap">
                              <span className="header__cart-item-price">{priceCurrent}đ</span>
                              <span className="header__cart-item-multiply">x</span>
                              <span className="header__cart-item-qnt">{amount}</span>
                            </div>
                          </div>
                          <div className="header__cart-item-body">
                            <span className="header__cart-item-description">
                              {type !== '' && <span>Phân loại:</span>} {type}
                            </span>
                            <span className="header__cart-item-delete">Xóa</span>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }

              </ul>
              <div className='header__cart-wrap-btn'>
                <button to='/cart' className="header__cart-view btn btn--primary">Xem giỏ hàng</button>
              </div>
            </div>
          </div>
        </Link>
        {
          openModal && isLogin === false ? <NotifiModal text='Đăng nhập để vào giỏ hàng' type='warning' /> : null
        }
      </div>
    </article>
  );
};

export default HeaderSearch;