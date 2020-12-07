import React from 'react';
import prodData from './data';
import Product from './components/Product';



function App() {
  return (

    <div className="grid-container">

      <header className="row">
        <div>
          <a className="brand" href="/">Harshana Medicare</a>
        </div>


        <div>

          <a href="Cart">Cart</a>
          <a href="Signin">Sign In</a>
        </div>

      </header>

      <main>
        <div className="row center">
          {
            prodData.products.map((product) => (
              <Product key={product._id} product = {product}> </Product>
                  )
              )
          }




        </div>


      </main>

      <footer className="row center">

        Contact Us On FACEBOOK
      </footer>
    </div>


  );
}

export default App;
