import React, {useEffect, useState} from 'react';
import {FaStar, FaCartPlus} from 'react-icons/fa'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../components/Loading';

import {getSingleProduct,addToCart,updateCart} from '../actions/ActionWithProduct'
import NotifiModal from '../components/modals/NotifiModal'

const SingleProduct = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.pro.singleProduct)
  const loading = useSelector(state => state.pro.singleProductLoading)
  const isLogin = useSelector(state => state.lo.isLogin)

  const [numberAmount, setNumberAmount] = useState(1)

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
  

  const decrease = () =>{
    if(numberAmount > 1){
      setNumberAmount(numberAmount - 1)
    }
  }

  const increase = () =>{
    if(numberAmount < 20){
      setNumberAmount(numberAmount + 1)
    }
  }
  
  const handleClick = (id) =>{
    if(isLogin){
      let initialAmount = numberAmount;
      const userInfo = JSON.parse(localStorage.getItem('login')) || ''
      const cartInfo = JSON.parse(localStorage.getItem('cartInfo')) || undefined
      if(cartInfo){
        const allProducts = [...cartInfo.products]
        allProducts.map((item, index) => {
          if(item.productId === id){
            initialAmount = item.amount + initialAmount;
            allProducts.splice(index,1)
          }
          return 0
        })
        const idCart = cartInfo.id
        const product = {
          // idUser: userInfo.id,
          products: [
            ...allProducts,
            {
              productId:id,
              amount:initialAmount
            }
          ]
        }
        dispatch(updateCart(idCart,product, (res) =>{
          if(res) setNotifi(true)
        }))
      }
      else{
        const product = {
          idUser: userInfo.id,
          products: [
            {
              productId:id,
              amount:initialAmount
            }
          ]
        }
        dispatch(addToCart(product, (res) =>{
          if(res) setNotifi(true)
        }))
      }
    }else{
      setNotifi(true)
    } 
  }


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
                <button onClick={decrease} className="singleProduct__quantity-btn singleProduct__quantity-decrease">
                  <i><AiOutlineMinus/></i>
                </button>
                <input readOnly className='singleProduct__quantity-input' value={numberAmount} type="text"/>
                <button onClick={increase} className="singleProduct__quantity-btn singleProduct__quantity-increase">
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
        notifi && isLogin ? <NotifiModal text='Sản phẩm đã được thêm vào giỏ hàng' type='successful'/> : null
      }
      {
        notifi && isLogin === false ? <NotifiModal text='Đăng nhập để thêm sản phẩm vào giỏ hàng' type='warning'/> : null
      }
    </article>
  );
};

export default SingleProduct;