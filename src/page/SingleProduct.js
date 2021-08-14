import React, { useEffect, useState } from 'react';
import { FaStar, FaCartPlus } from 'react-icons/fa'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading';
// import Slider from '../components/slider'
import Comments from '../components/comments/Comments';

import { getSingleProduct, addToCart, updateCart } from '../actions/ActionWithProduct'
import NotifiModal from '../components/modals/NotifiModal'
import ImageContainer from '../components/singleProduct/ImageContainer';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.pro.singleProduct)
  const loading = useSelector(state => state.pro.singleProductLoading)
  const isLogin = useSelector(state => state.lo.isLogin)
  const cartInfo = useSelector(state => state.sale.cartInfo);

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
    description,
    types
  } = product

  const [notifi, setNotifi] = useState(false)
  const [type, setType] = useState('')

  const history = useHistory()


  const decrease = () => {
    if (numberAmount > 1) {
      setNumberAmount(numberAmount - 1)
    }
  }

  const increase = () => {
    if (numberAmount < 20) {
      setNumberAmount(numberAmount + 1)
    }
  }

  const checkType = (name) => {
    setType(name)
  }

  const handleClickSaleNow = (id) =>{
    if (isLogin) {
      if (types.length === 0 || type !== '') {
        const obj = {
          ...product,
          amount: numberAmount,
          type:type
        }
        localStorage.setItem('order', JSON.stringify([obj]))
        history.push(`/checkout/${id}`)
      }else {
        alert('Vui lòng chọn loại sản phẩm')
      }
    }else {
      setNotifi(true)
    }
  } 
  

  const handleClick = (id) => {
    if (isLogin) {
      if (types.length === 0 || type !== '') {

        let initialAmount = numberAmount;
        const userInfo = JSON.parse(localStorage.getItem('login')) || ''
          if (cartInfo.id !== 0) {
            const allProducts = [...cartInfo.products]
            allProducts.map((item, index) => {
              if (item.productId === id) {
                initialAmount = item.amount + initialAmount;
                allProducts.splice(index, 1)
              }
              return 0
            })
            const idCart = cartInfo.id
            const product = {
              idUser: userInfo.id,
              products: [
                ...allProducts,
                {
                  productId: id,
                  amount: initialAmount,
                  type: type
                }
              ]
            }
            dispatch(updateCart(idCart, product, (res) => {
              if (res) setNotifi(true)
            }))
          }
          else {
            const product = {
              idUser: userInfo.id,
              products: [
                {
                  productId: id,
                  amount: initialAmount,
                  type: type
                }
              ]
            }
            dispatch(addToCart(product, (res) => {
              if (res) setNotifi(true)
            }))
          }
      } else {
        alert('Vui lòng chọn loại sản phẩm')
      }
    } else {
      setNotifi(true)
    }
  }


  useEffect(() => {
    const timeOut = setTimeout(() => {
      setNotifi(false)
    }, 1500);
    return () => clearTimeout(timeOut)
  }, [notifi]);


  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [dispatch, id]);


  if (loading) {
    return <Loading />
  }

  return (
    <article className='grid'>
      <div className="grid__row container__content">
        <div className='singleProduct'>
          <ImageContainer image={image} />
          <div className="singleProduct-wrap">
            <div className="singleProduct__title">{name}</div>
            <div className="singleProduct__review">
              <div className="singleProduct__review-star">
                {
                  [...Array(starRating*1)].map((star, i) => {
                    if (i + 1 === starRating*1 && i + 1 < 5) {
                      return (
                        <span key={i}>
                          <i key={i} className="home-product-item__star--gold"><FaStar /></i>
                          {
                            [...Array(5 - starRating*1)].map((star2, index) => {
                              return <i className="home-product-item__star--disable" key={index}><FaStar /></i>
                            })
                          }
                        </span>
                      )
                    }
                    return <i key={i} className="home-product-item__star--gold"><FaStar /></i>
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
              <span className='singleProduct__description-content' >
                {description}
              </span>
            </div>

            <a href='#comment' className='category__label'>Đánh giá sản phẩm</a>

            <div className={`singleProduct__type ${types.length === 0 && 'singleProduct__type--hide'}`}>
              <span className='category__label'>Loại: </span>
              <ul className='category__list'>
                {
                  types.map((item, index) => {
                    return (
                      <li key={index} className={`category__item ${item === type && 'category__item--active'}`}>
                        {/* category__modal-item--active */}
                        <button onClick={e => checkType(item)} className='category__item-btn' >{item}</button>
                        <div className='category__item-icon'><BiCheck /></div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>

            <div className="singleProduct__quantity">
              <span className='singleProduct__quantity-label'>Số lượng: </span>
              <div className='singleProduct__quantity-wrap'>
                <button onClick={decrease} className={`singleProduct__quantity-btn singleProduct__quantity-decrease ${numberAmount < 2 && 'btn--disabled'}`}>
                  <i><AiOutlineMinus /></i>
                </button>
                <input readOnly className='singleProduct__quantity-input' value={numberAmount} type="text" />
                <button onClick={increase} className="singleProduct__quantity-btn singleProduct__quantity-increase">
                  <i><AiOutlinePlus /></i>
                </button>
              </div>
              <span className='singleProduct__quantity-label quantity--space'>{quantity} sản phẩm có sẵn</span>
            </div>
            <div className="singleProduct__button-container">
              <button onClick={e => handleClick(id)} className="singleProduct__button-add btn btn--second">
                <i className='singleProduct__button-add-icon'><FaCartPlus /></i>
                <span>Thêm vào giỏ hàng</span>
              </button>
              <button onClick={e => handleClickSaleNow(id)} className="singleProduct__button-selling btn btn--primary">Mua ngay</button>
            </div>
          </div>
        </div>
        {/* <Slider/> */}
        <div id='comment' className='singlePro__comment'>
          <Comments />
        </div>
      </div>
      {
        notifi && isLogin ? <NotifiModal text='Sản phẩm đã được thêm vào giỏ hàng' type='successful' /> : null
      }
      {
        notifi && isLogin === false ? <NotifiModal text='Đăng nhập để thêm sản phẩm vào giỏ hàng' type='warning' /> : null
      }
    </article>
  );
};

export default SingleProduct;