import React from 'react';
import './style.css';
import Main from './components/Main';
import Service from './components/Service';
import Products from './components/Products';
import Featured from './components/Featured';
import Review from './components/Review';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

export default function index() {

    return (
        <>
            <Main/>
            <Service/>
            <Products/>
            <Featured/>
            <Review/>
            <NewsLetter/>
            {/* <Footer/> */}
        </>
    )
}
