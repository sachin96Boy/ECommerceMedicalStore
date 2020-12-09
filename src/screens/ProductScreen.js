import React from 'react';
import { Link } from 'react-router-dom';

import Rating from '../components/Rating';
import prodData from '../data';


export default function ProductScreen(props) {
    const product = prodData.products.find(x => (x._id === props.match.params.id));
    console.log(prodData.products.find(x => (x._id) === (props.match.params.id)));
    console.log(props.match.params.id);
    console.log(prodData.products.find(x => Number(x._id)))
    if (!product) {
        return <div>
            Product Not Found
        </div>;
    }
    return (
        <div>
            <div className="alert alert-dark" role="alert">
            <Link to="/">Back To Home</Link>
            </div>
            
            <div className="raw top">
                <div className="col-md">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-sm">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h1>{product.name}</h1>
                        </li>
                        <li className="list-group-item">
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        
                            <li className="list-group-item">price : ${product.price}</li>
                       
                        <li className="list-group-item">
                            Description : <p>
                                {product.description}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col-sm">
                    <div className="card card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                    <div>price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div>Status</div>
                                    <div >{product.countInStock > 0 ? (<span className="success">In Stock</span>) : (<span className="error"> Out Of Stock</span>)}</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}