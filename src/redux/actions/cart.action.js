const ADD_TO_CART = "ADD_TO_CART";

function addToCart(payload) {
    console.log('product', payload);
    return {
        type: ADD_TO_CART,
        payload
    }
}

function removeFromCart() {

}

export {
    addToCart
}