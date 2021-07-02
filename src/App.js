import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  // Link,
  // Redirect,
  // useRouteMatch,
  // useParams
} from 'react-router-dom'
// component
import Header from './page/Header';
import Product from './components/main/products/Product'

// page
import Home from './page/Home'
import About from './page/About'
import Error from './page/Error'
import Contacts from './page/Contacts'
import SingleProduct from './components/main/products/SingleProduct';
import Modal from './components/modals/Modal';


function App() {
  return (
    
    <main className="main">
      <Router>
        <Modal/>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/about'>
              <About/>
          </Route>
          <Route path='/contacts'>
              <Contacts/>
          </Route>
          <Route path='/product'>
              <Product/>
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
