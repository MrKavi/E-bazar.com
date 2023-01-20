import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const Cart = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    return (
        <>
            <div style={{ height: "78vh" }}>
                <div style={{ width: "full", display: "flex", justifyContent: "center", padding: "50px 10px", alignItems: "center", margin: "20px auto", }}>
                    <div style={{ padding: "5px 15px", alignItems: "center", display: "flex", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}>
                        <div class="product-tumb">
                            <img style={{ height: "200px" }} src="https://cdn.shopify.com/s/files/1/0573/2309/4216/products/Miami_RubyRed_001.png?v=1656925796" alt="" />
                        </div>
                        <div style={{ width: "300px" }} >
                            <span >Headphone</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>

                        </div>

                        <div style={{ borderLeft: "1px solid black", padding: "21px", display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <h3> Quantity</h3>
                            <h4 >
                                1
                            </h4>
                        </div>
                        <div style={{ borderLeft: "1px solid black", padding: "21px", display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <h3> Price</h3>
                            <h4 >
                                <h3>6000 ₹</h3>
                            </h4>
                        </div>
                        <div style={{ borderLeft: "1px solid black", padding: "21px", display: "flex", justifyContent: "start", alignItems: "center", marginRight: "200px" }}>

                            <div style={{ display: "flex", justifyContent: "space-between", width: "180px" }}>
                                <button onClick={handleIncrement} style={{ marginBottom: "5px", marginRight: "5px", backgroundColor: "green", color: "white", height: "30px", borderRadius: "2px", border: "none" }}>Add  </button>
                                {count}
                                <button onClick={handleDecrement} style={{ marginBottom: "5px", marginLeft: "5px", backgroundColor: "red", color: "white", height: "30px", borderRadius: "2px", border: "none" }}>Remove  </button>
                            </div>
                        </div>
                        <div>
                            <h3> Total</h3>
                            <h4 >
                                <h3>6000 ₹</h3>
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart