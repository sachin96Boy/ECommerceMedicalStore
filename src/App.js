import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';





function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">

        <header className="row">
          <div>
            <a className="brand" href="/">Harshana Medicare</a>
          </div>


          <div>

            <a href="Cart"><h3>Cart</h3></a>
            <a href="Signin"><h3>Sign In</h3></a>
          </div>

        </header>



          <main>
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
