import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cart.action';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        product.quantity = product.quantity + 1;
        dispatch(addToCart(product));
    }

    return (
        <>
            <div style={{ height: "78vh" }}>
                <div style={{ width: "full", display: "flex", justifyContent: "center", padding: "50px 10px", alignItems: "center", margin: "20px auto", }}>
                    {
                        cart.products.map(product => {
                            return (
                                <div key={product.id} style={{ padding: "5px 15px", alignItems: "center", display: "flex", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}>
                                    <div >
                                        <img style={{ height: "200px" }} src={product.img} alt="" />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "300px" }} >
                                        <h2 >{product.name}</h2>
                                        <p>{product.description}</p>
                                        <div style={{ padding: "21px", display: "flex", alignItems: "center", }}>

                                            <div style={{ display: "flex", justifyContent: "space-between", width: "180px" }}>
                                                <button onClick={() => handleAddToCart(product)} style={{ width: "100px", marginBottom: "5px", marginRight: "5px", backgroundColor: "green", color: "white", height: "30px", borderRadius: "2px", border: "none" }}>Add  </button>
                                                <button onClick={() => { }} style={{ marginBottom: "5px", marginLeft: "5px", width: "100px", backgroundColor: "red", color: "white", height: "30px", borderRadius: "2px", border: "none" }}>Remove  </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ padding: "21px", display: "flex", flexDirection: "column", alignItems: "center" }} >
                                        <h3> Price</h3>
                                        <h4 >
                                            <h3>{product.price} ₹</h3>
                                        </h4>
                                    </div>
                                    <div style={{ borderLeft: "1px solid black", padding: "21px", display: "flex", flexDirection: "column", alignItems: "center" }} >
                                        <h3> Quantity</h3>
                                        <h4 >
                                            {product.quantity}
                                        </h4>
                                    </div>


                                </div>
                            );
                        })
                    }
                    <div style={{ padding: "54px", marginLeft: "20px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}>
                        <h3> Total</h3>
                        <h4 >
                            <h3>{cart.totalPrice} ₹</h3>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart