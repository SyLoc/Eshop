import React, {useEffect, useState} from 'react';
import {FaStar, FaCartPlus} from 'react-icons/fa'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../../Loading';

import {getSingleProduct} from '../../../actions/ActionWithProduct'
import {addToCart} from '../../../actions/ActionWithProduct'
import NotifiModal from '../../modals/NotifiModal'

const SingleProduct = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.pro.singleProduct)
  const loading = useSelector(state => state.pro.singleProductLoading)
  const cart = useSelector(state => state.sale.cart)

  const {
    name,
    image,
    priceOld,
    priceCurrent,
    sold,
    starRating,
    quantity,
    discountPercent,
    description
  } = product

  const [notifi, setNotifi] = useState(false)
  
  const handleChangeInput = () =>{

  }

  const handleClick = (id) =>{
    const product = {
      productId:id,
      amount:1
    }
    dispatch(addToCart(product))
    setNotifi(true)
  }

  useEffect(() => {
    console.log(cart)
  }, [cart]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setNotifi(false)
    }, 2000);
    return () => clearTimeout(timeOut)
  }, [notifi]);

  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [dispatch,id]);


  if(loading){
    return <Loading/>
  }
  
  return (
    <article className='grid'>
      <div className="grid__row">
        <div className='singleProduct'>
          <div className="singleProduct__container-img">
            <div className='singleProduct__container-img-header'>
              <div className='singleProduct__container-single-img' 
              style = {{backgroundImage: `url(${image})`}}
              ></div>
            </div>
            <div className="singleProduct__container-list-img">
              <button className="singleProduct__container-list__btn singleProduct__container-list--btnLeft">
                <i className='singleProduct__container-list__btn-icon'><RiArrowLeftSLine/></i>
              </button>
              <div className="singleProduct__container-list-img__wrap">
                <img className='singleProduct__container-img-item' src="https://cf.shopee.vn/file/dad4b00d805cb3482aea43cf030ee1e2_tn" alt="" />
                <img className='singleProduct__container-img-item' src="https://cf.shopee.vn/file/dad4b00d805cb3482aea43cf030ee1e2_tn" alt="" />
                <img className='singleProduct__container-img-item' src="https://cf.shopee.vn/file/dad4b00d805cb3482aea43cf030ee1e2_tn" alt="" />
                <img className='singleProduct__container-img-item' src="https://cf.shopee.vn/file/dad4b00d805cb3482aea43cf030ee1e2_tn" alt="" />
                <img className='singleProduct__container-img-item' src="https://cf.shopee.vn/file/dad4b00d805cb3482aea43cf030ee1e2_tn" alt="" />
                <img className='singleProduct__container-img-item' src="https://cf.shopee.vn/file/dad4b00d805cb3482aea43cf030ee1e2_tn" alt="" />
              </div>
              <button className="singleProduct__container-list__btn singleProduct__container-list--btnRight">
                <i className='singleProduct__container-list__btn-icon'><RiArrowRightSLine/></i>
              </button>
            </div>
          </div>
          <div className="singleProduct-wrap">
            <div className="singleProduct__title">{name}</div>
            <div className="singleProduct__review">
              <div className="singleProduct__review-star">
                {
                  [...Array(JSON.parse(starRating))].map((star, i) =>{
                    if(i+1 === JSON.parse(starRating) && i+1 < 5){
                      return (
                        <span key={i}>
                          <i key={i} className="home-product-item__star--gold"><FaStar/></i>
                          {
                            [...Array(5 - JSON.parse(starRating))].map((star2, index)=>{
                              return <i className="home-product-item__star--disable" key={index}><FaStar/></i>
                            })
                          }
                        </span>
                      )
                    }
                    return <i key={i} className="home-product-item__star--gold"><FaStar/></i>
                  }) 
                }
              </div>
              <div className="singleProduct__review-sold">
                <span className='singleProduct__review-sold-number'>1</span>
                <span className='singleProduct__review-sold-title'>Đánh giá</span>
              </div>
              <div className="singleProduct__review-sold">
                <span className='singleProduct__review-sold-number'>{sold}</span>
                <span className='singleProduct__review-sold-title'>Đã bán</span>
              </div>
            </div>
            <div className="singleProduct__price">
              <div className="singleProduct__price-old">{priceOld}đ</div>
              <div className="singleProduct__price-current">{priceCurrent}đ</div>
              <div className="singleProduct__price-discount">
                <span className='singleProduct__price-discount-percent'>{discountPercent}%</span>
                <span className='singleProduct__price-discount-title'>giảm</span>
              </div>
            </div>
            <div className="singleProduct__description">
              <span className='singleProduct__description-label'>Mô tả sản phẩm: </span>
              <span className ='singleProduct__description-content' >
               {description}
              
              </span>
            </div>
            <div className="singleProduct__quantity">
              <span className='singleProduct__quantity-label'>Số lượng: </span>
              <div className='singleProduct__quantity-wrap'>
                <button className="singleProduct__quantity-btn singleProduct__quantity-decrease">
                  <i><AiOutlineMinus/></i>
                </button>
                <input onChange={handleChangeInput} className='singleProduct__quantity-input' defaultValue='1' type="text"/>
                <button className="singleProduct__quantity-btn singleProduct__quantity-increase">
                  <i><AiOutlinePlus/></i>
                </button>
              </div>
              <span className='singleProduct__quantity-label quantity--space'>{quantity} sản phẩm có sẵn</span>
            </div>
            <div className="singleProduct__button-container">
              <button onClick={e => handleClick(id)} className="singleProduct__button-add btn btn--second"> 
                <i className='singleProduct__button-add-icon'><FaCartPlus/></i>
                <span>Thêm vào giỏ hàng</span>
              </button>
              <button className="singleProduct__button-selling btn btn--primary">Mua ngay</button>
            </div>
          </div>
        </div>
      </div>
      {
        notifi ? <NotifiModal text='Sản phẩm đã được thêm vào giỏ hàng' type='successful'/> : null
      }
    </article>
  );
};

export default SingleProduct;