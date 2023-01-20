import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
const ProductDetails = (props) => {

    const products = useSelector((state) => state.products)
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id))
    // console.log(".............", product)
    return (

        <div style={{ height: "78vh", }}>
            <div style={{ maxWidth: "800px", padding: "5px 15px", alignItems: "center", display: "flex", boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px", margin: "20px auto", }}>
                <div class="product-tumb">
                    <img style={{ height: "400px", width: "400px", objectFit: "cover" }} src={product.img} alt="" />
                </div>
                <div >
                    <h2 >{product.name}</h2>
                    <p>{product.description}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }} >
                        <div ><h3>₹{product.price}</h3></div>
                        <Link to="/cart" style={{ textDecoration: "none", }}>
                            <button

                                style={{ cursor: "pointer", backgroundColor: "rgb(5, 205, 18)", padding: "5px 10px", border: "none", display: "flex", alignItems: "center" }}><LocalMallIcon style={{ marginRight: "5px" }} /> Buy Now</button>
                        </Link>
                        <div >

                            <FavoriteIcon style={{ marginRight: "10px", color: "red" }} />
                            < ShoppingCartCheckoutIcon style={{ color: "green" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails