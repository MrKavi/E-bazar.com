import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useHistory } from "react-router-dom";
const Product = () => {


    return (
        <>
            <div style={{ height: "78vh", }}>
                <div style={{ maxWidth: "300px", padding: "5px 15px", alignItems: "center", display: "flex", flexDirection: "column", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", margin: "20px auto", }}>
                    <div class="product-tumb">
                        <img style={{ height: "200px" }} src="https://cdn.shopify.com/s/files/1/0573/2309/4216/products/Miami_RubyRed_001.png?v=1656925796" alt="" />
                    </div>
                    <div style={{ maxWidth: "300px" }} >
                        <span >Headphone</span>
                        <Link to="/product-details">
                            <h4>Product Details...</h4>

                        </Link>
                        <div style={{ width: "300px", display: "flex", justifyContent: "space-between", marginBottom: "10px" }} >
                            <div >₹230.99</div>
                            <Link to="/cart" style={{ textDecoration: "none" }}>
                                <button

                                    style={{ padding: "5px 5px", cursor: "pointer", backgroundColor: "rgb(5, 205, 18)", border: "none", display: "flex", alignItems: "center" }}><LocalMallIcon style={{ marginRight: "5px" }} /> Buy Now</button>
                            </Link>
                            <div  >

                                <FavoriteIcon style={{ marginRight: "10px" }} />
                                < ShoppingCartCheckoutIcon />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product