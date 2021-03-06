import React from 'react';
import {FaStar, FaHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Product = (
  { 
    id,
    name, 
    country, 
    image,
    type,
    discountPercent,
    favorite,
    priceCurrent,
    priceOld,
    starRating,
    sold
  }) => {

  
  return (
    <div className="grid__column-2-4">
      <Link className='home-product-item-wrap' to={`/singleProduct/${id}`}> 
        <div className="home-product-item " >
          <div 
            className="home-product-item__img"
            style = {{backgroundImage: `url(${image})`}}>
          </div>
          <h4 className="home-product-item__name">{name}</h4>
          
          <div className="home-product-item__price">
            <span className="home-product-item__price-old">{priceOld}đ</span>
            <span className="home-product-item__price-current">{priceCurrent}đ</span>
          </div>

          <div className="home-product-item__action">
            <span className='home-product-item__like'>
              {/* home-product-item__like--liked */}
              <i className="home-product-item__like-icon"><FaHeart/></i>
            </span>
            <div className="home-product-item__rating">
              {
                
                [...Array(starRating*1)].map((star, i) =>{
                  if(i + 1 === starRating*1 && i+1 < 5){
                    return (
                      <span key={i}>
                        <i key={i} className="home-product-item__star--gold"><FaStar/></i>
                        {
                          [...Array(5 - starRating*1)].map((star2, index)=>{
                            return <i key={index} className="home-product-item__star--disable"><FaStar/></i>
                          })
                        }
                      </span>
                    )
                  }
                  return <i key={i} className="home-product-item__star--gold"><FaStar/></i>
                }) 
              }
            </div>
            <span className="home-product-item__sold">{sold} đã bán</span>
          </div>

          <div className='home-product-item__footer'>
            <span className="home-product-item__brand">{type}</span>
            <span className="home-product-item__country">{country}</span>
          </div>

          { 
            favorite === "true" ? 
            (
              <div className='home-product-item__favorite'>
                <i className="fas fa-check"></i>
                <span>Yêu thích</span>
            </div>
            ) : null
          }

          <div className="home-product-item__sale-off">
            <span className="home-product-item__sale-off-percent">{discountPercent}%</span>
            <span className="home-product-item__sale-off-label">Giảm</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;