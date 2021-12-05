import React from 'react';
import ProductList from '../components/main/products/ProductList'
import Filter from '../components/main/Filter';
import Category from '../components/main/Category';
import Footer from '../components/footer/Footer';
import Pagination from '../components/main/Pagination';
import {Row, Col} from 'antd'

const Home = () => {

  return (
    <main className="container grid">
      <section className="grid__row container__content">
        <Filter/>
        <ProductList/>
        <Pagination/>
      </section>
    </main>
  );
};


export default Home;