import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScren(props) {

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHander = (id) =>{
        //implement delete function to remove frrom cart 
    } 

    return (


        <div className="row top">
            <div className="col-2">
                <h1>Order Section</h1>
                {cartItems.length === 0 ? <MessageBox>Cart Is Empty. <Link to="/">Go To Home</Link></MessageBox> :
                    (
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.product}>
                                    <div className="row">
                                        {/* Show product image */}

                                        <div>
                                            <img src={item.image} alt={item.name} className="small"></img>
                                        </div>
                                        {/* show product name */}

                                        <div className="min-30">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>

                                        {/* show select box */}
                                        <div>
                                            <select value={item.qty} onChange={e => dispatch(addToCart(item.product), Number(e.target.value))}>
                                                {/* show options section */}
                                                {
                                                    [...Array(item.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div>
                                           ${item.price} 
                                        </div>

                                        <ddiv>
                                            <button type="button" onClick={() => removeFromCartHander(item.product)}>Remove</button>
                                        </ddiv>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )
                },
            </div>
        </div>
    );
}
