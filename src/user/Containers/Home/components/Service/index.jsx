import React from 'react';
import '../../style.css';

export default function index() {
    return (
        <div className="service section-cls">
            <div className="box-container">
                <div className="box">
                    <i className="fas fa-shipping-fast"></i>
                    <h3>fast delivery</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
                </div>

                <div className="box">
                    <i className="fas fa-undo"></i>
                    <h3>10 days replacements</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
                </div>

                <div className="box">
                    <i className="fas fa-headset"></i>
                    <h3>24 x 7 support</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
                </div>
            </div>
        </div>
    )
}
