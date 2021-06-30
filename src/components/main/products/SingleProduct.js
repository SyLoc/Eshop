import React, {useEffect} from 'react';
import {FaStar, FaCartPlus} from 'react-icons/fa'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../../Loading';

import {getSingleProduct} from '../../../actions/ActionWithProduct'

const SingleProduct = () => {
  const {id} = useParams();
  const img = 'https://cf.shopee.vn/file/3e549d6281cb111169c5556295aa0064'
  const dispatch = useDispatch();
  const product = useSelector((state) => state.pro.singleProduct)
  const loading = useSelector((state) => state.pro.singleProductLoading)
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
  

  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [dispatch]);


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
                        <>
                          <i className="home-product-item__star--gold"><FaStar/></i>
                          {
                            [...Array(5 - JSON.parse(starRating))].map((star2)=>{
                              return <i className="home-product-item__star--disable"><FaStar/></i>
                            })
                          }
                        </>
                      )
                    }
                    return <i className="home-product-item__star--gold"><FaStar/></i>
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
                <input className='singleProduct__quantity-input' value='1' type="text"/>
                <button className="singleProduct__quantity-btn singleProduct__quantity-increase">
                  <i><AiOutlinePlus/></i>
                </button>
              </div>
              <span className='singleProduct__quantity-label quantity--space'>{quantity} sản phẩm có sẵn</span>
            </div>
            <div className="singleProduct__button-container">
              <button className="singleProduct__button-add btn btn--second">
                <i className='singleProduct__button-add-icon'><FaCartPlus/></i>
                <span>Thêm vào giỏ hàng</span>
              </button>
              <button className="singleProduct__button-selling btn btn--primary">Mua ngay</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleProduct;