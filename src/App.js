import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect,
  // Link,
  // Redirect,
  // useRouteMatch,
  // useParams
} from 'react-router-dom'
// component
import Header from './page/Header';
import Account from './components/user/Account';
import Purchase from './components/user/Purchase';
import Notifications from './components/user/Notifications';

// page
import Home from './page/Home'
import About from './page/About'
import Error from './page/Error'
import Contacts from './page/Contacts'
import SingleProduct from './page/SingleProduct';
import Modal from './components/modals/Modal';
import Cart from './page/Cart';
import Checkout from './page/Checkout';

// ========================

import {useSelector} from 'react-redux'

function App() {

  const login =  useSelector(state => state.lo.isLogin);

  return (
    <main className="main">
      <Router>
        <Modal/>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/cart' render={() =>{
            return login ? <Cart/> : <Redirect to='/'/>
          }}>
          </Route>
          <Route path='/checkout' render={() =>{
            return login ? <Checkout/> : <Redirect to='/'/>
          }}>
          </Route>
          <Route path='/purchase'>
              <Purchase/>
          </Route>
          <Route path='/account'>
              <Account/>
          </Route>
          <Route path='/notifications'>
              <Notifications/>
          </Route>
          <Route path='/about'>
              <About/>
          </Route>
          <Route path='/contacts'>
              <Contacts/>
          </Route>
          <Route path='/SingleProduct/:id'>
              <SingleProduct/>
          </Route>
          <Route path='*'>
              <Error/>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
