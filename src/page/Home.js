import React from 'react';
import ProductList from '../components/main/products/ProductList'
import Filter from '../components/main/Filter';
import Category from '../components/main/Category';
import Footer from '../components/footer/Footer';
import Pagination from '../components/main/Pagination';

const Home = () => {

  return (
    <main className="container grid">
      <section className="grid__row container__content">
        <div className="grid__column-2">
          <Category/>
        </div>
        <div className="grid__column-10">
          <Filter/>
          <ProductList/>
          <Pagination/>
        </div>
      </section>
      <Footer/>
    </main>
  );
};


export default Home;