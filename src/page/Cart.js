import React from 'react';

// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Cart2 = () =>{
  return (
    <section className='grid'>
      <h1>header...</h1>
      <div className="grid__row">
        <div className='container-abc'>
          <h1>gio hang 1</h1><span>hello</span>
          <h1>gio hang 2</h1>
          
        </div>
      </div>
    </section>
  )
}

const Cart = () => {
  return (
    <>
      <Cart2/>
    </>
  );
};


export default Cart;