import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
const Product = () => {

    const products = useSelector((state) => state.products)

    console.log("p.......", products)

    return (
        <>
            <div style={{ height: "81vh" }}>
                <div style={{ display: "flex", marginRight: "10px", }}>
                    {products.map(item => (
                        <Link to={`/product-details/${item.id}`} style={{ textDecoration: "none", maxWidth: "300px", padding: "5px 15px", alignItems: "center", display: "flex", flexDirection: "column", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", margin: "20px auto", }}>
                            <div >
                                <img style={{ height: "200px", width: "250px", objectFit: "cover" }} src={item.img} alt="" />

                                <div style={{ maxWidth: "300px" }} >
                                    <h3 style={{ color: "black" }} >{item.name}</h3>
                                    <Link to="/product-details">
                                        <h4>Product Details...</h4>
                                    </Link>
                                    <div style={{ width: "300px", display: "flex", justifyContent: "space-between", marginBottom: "10px" }} >
                                        <div >₹{item.price}</div>
                                        <Link to="/cart" style={{ textDecoration: "none" }}>
                                            <button
                                                style={{ textDecoration: "none", padding: "5px 5px", cursor: "pointer", backgroundColor: "rgb(5, 205, 18)", border: "none", display: "flex", alignItems: "center" }}><LocalMallIcon style={{ marginRight: "5px", textDecoration: "none" }} /> Buy Now</button>
                                        </Link>
                                        <div  >

                                            <FavoriteIcon style={{ marginRight: "10px", color: "red" }} />
                                            < ShoppingCartCheckoutIcon style={{ color: "green" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>

        </>
    )
}

export default Product