import React from 'react';
import '../../style.css';
import { data } from './mock-data';

export default function Featured() {
    
    const handleClickImage = (e, index) =>{
        const ElBigImage = document.querySelector(`.big-image-${index}`);
        ElBigImage.src = e.target.getAttribute('src');
    }

    return (
        <div className="featured section-cls" id="featured">
            <h1 className="heading"> <span>featured</span> products </h1>

            {
                data.length === 0 ? <div>no products</div> : 
                (
                    data.map((item, index) =>(
                        <div key={item.id} className="row">
                            <div className="image-container">
                                <div className="small-image">
                                    {
                                        item.images.map((image, i) =>(
                                            <img 
                                                key={i}
                                                onClick={(e) => handleClickImage(e, index+1)}
                                                src={image} 
                                                className={`featured-image-${index+1}`} alt=""/>
                                        ))
                                    }
                                </div>
                                <div className="big-image">
                                    <img 
                                        src={item.images[0]}  className={`big-image-${index+1}`} alt=""/>
                                </div>
                            </div>
                            <div className="content">
                                <h3>{item.name}</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <p>{item.desc}</p>
                                <div className="price">${item.current_price} <span>${item.old_price}</span></div>
                                <a href="#" className="btn-x">add to cart</a>
                            </div>
                        </div>
                    ))
                )
            }            
        </div>
    )
}
