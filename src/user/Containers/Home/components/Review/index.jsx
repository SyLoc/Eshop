import React from 'react';
import {reviews} from './mock-data';
import '../../style.css';

export default function index() {
    return (
        <div className="review section-cls" id="review">
            <h1 className="heading"> customer's <span>review</span> </h1>

            <div className="box-container">
                {
                    reviews.length === 0 ? <div>no review</div> : 
                    (
                        reviews.map((review) =>(
                            <div key={review.id} className="box">
                                <img src={review.avata} alt=""/>
                                <h3>{review.name}</h3>
                                <p>{review.desc}</p>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>

    )
}
