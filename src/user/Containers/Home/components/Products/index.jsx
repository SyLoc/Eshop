import React from 'react';
import '../../style.css';
import { products } from './mock-data';

export default function index() {
    return (
        <div className="products section-cls" id="products">
            <h1 className="heading"> latest <span>products</span> </h1>
            <div className="box-container">
                {
                    products.length === 0 ? <div>no products</div> : 
                    (
                        products.map((product) =>(
                            <div className="box">
                                <div className="icons">
                                    <a href="#" className="fas fa-heart"></a>
                                    <a href="#" className="fas fa-share"></a>
                                    <a href="#" className="fas fa-eye"></a>
                                </div>
                                <img src={product.image} alt="" />
                                <div className="content">
                                    <h3>{product.name}</h3>
                                    <div className="price">${product.current_price} <span>${product.old_price}</span></div>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <a href="#" className="btn-x">add to cart</a>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}
