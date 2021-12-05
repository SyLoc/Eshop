import React, {useState, useRef, useEffect} from 'react';
import '../../style.css';
import ModalCart from '../ModalCart';
import { Link } from 'react-router-dom';

import { data } from './mock-data';


export default function Main() {
    const [activeId, setActiveId] = useState(1);
    const [isNavbarMobile, setIsNavbarMobile] = useState(false);
    const [showModalCart, setShowModalCart] = useState(false);

    const handleClick = () =>{
        setIsNavbarMobile(!isNavbarMobile);
    }

    window.onscroll = () =>{
        setIsNavbarMobile(false);
    }

    const handleClickNext = () =>{
        if(activeId === data.length){
            setActiveId(1)
        }else{
            setActiveId(activeId + 1)
        }
    }

    const handleClickPrev = () =>{
        if(activeId === 1){
            setActiveId(data.length)
        }else{
            setActiveId(activeId - 1)
        }
    }

    useEffect(() => {
        const nextSlide = () => {
            setActiveId((activeId) => (activeId === data.length ? 1 : activeId + 1));
        };
        const setInterval = setTimeout(nextSlide, 5000);
        return () => clearInterval(setInterval)
    }, [activeId]);

    return (
        <>
        <header>
            <div id="menu-bar" onClick={handleClick} className={`fas fa-bars ${isNavbarMobile ? 'fa-times' : null}`}></div>

            <a href="/" className="logo">
                costup
            </a>

            <nav className={`navbar ${isNavbarMobile ? 'active' : null}`}>
                <a href="#home">home</a>
                <a href="#products">products</a>
                <a href="#featured">featured</a>
                <a href="#review">review</a>
            </nav>

            <div className="icons">
                <a href="/" className="fas fa-heart" />
                <a onClick={() => setShowModalCart(true)} className="fas fa-shopping-cart"></a>
                <a href="/" className="fas fa-user"></a>
            </div>
        </header>

        <div className="home section-cls" id="home">

            {
                data.map((item) =>(
                    <div key={item?.id} className={`slide-container ${item?.id === activeId ? 'active' : null}`}>
                        <div className="slide">
                            <div className="content">
                                <span>{item?.name}</span>
                                <h3>{item?.title}</h3>
                                <p>{item?.desc}</p>
                                <Link to="all-product" className="btn-x">shop now</Link>
                            </div>
                            <div className="image">
                                <img src={item?.imageShoe} className="shoe" alt=""/>
                                <img src={item?.imageText} className="text" alt=""/>
                            </div>
                        </div>
                    </div>
                ))
            }

            <div id="prev" className="fas fa-chevron-left" onClick={handleClickPrev}></div>
            <div id="next" className="fas fa-chevron-right" onClick={handleClickNext}></div>

        </div>
        </>
    )
}
