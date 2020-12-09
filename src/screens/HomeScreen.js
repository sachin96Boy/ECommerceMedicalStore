import React from 'react';
import prodData from '../data';
import Product from '../components/Product';

export default function HomeScreen(){
    return(
        <div>
        <div className="row center">
          {
            prodData.products.map((product) => (
              <Product key={product._id} product={product}> </Product>
            )
            )
          }




        </div>
      </div>
    )
}