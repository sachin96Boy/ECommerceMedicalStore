import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScren from './screens/CartScren';
import { useSelector } from 'react-redux';





function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">

        <header className="row">
          <div>
            <Link className="brand" to="/">Harshana Medicare</Link>
          </div>


          <div>

            <Link to="Cart">Cart
            {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="Signin">Sign In</Link>
          </div>

        </header>



        <main>
          <Route path="/cart/:id?" component={CartScren}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>



        </main>

        <footer className="row center">

          <h2> Contact Us On FACEBOOK</h2>
        </footer>
      </div>
    </BrowserRouter>


  );
}

export default App;
