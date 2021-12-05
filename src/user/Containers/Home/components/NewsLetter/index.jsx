import React from 'react';
import '../../style.css';

export default function index() {
    return (
        <div className="newsletter section-cls">
            <div className="content">
                <h3>monthly newsletter</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ullam veniam at itaque culpa hic corporis saepe dicta doloremque nihil.</p>
                <form action="">
                    <input type="email" placeholder="enter your email" className="box"/>
                    <input type="submit" value="send" className="btn-x"/>
                </form>
            </div>

        </div>
    )
}
