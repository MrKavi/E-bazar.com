const initialState = {
    totalPrice: 5000,
    products: [{
        id: 1,
        name: "Headphone",
        price: 5000,
        description: "Apple Headphone Red",
        quantity: 1,
        img: "https://cdn.shopify.com/s/files/1/0573/2309/4216/products/Miami_RubyRed_001.png?v=1656925796",
    }]
}

function cartReducer(state = initialState, action) {
    console.log('action', action);
    switch (action.type) {
        case "ADD_TO_CART":
            const productIndex = initialState.products.findIndex(product => product.id === action.payload.id)
            if (state.products[productIndex]) {
                state.products[productIndex].quantity = action.payload.quantity;
                state.totalPrice = state.totalPrice + state.products[productIndex].price;
            }
            // to add new product in the cart products with its quantity and update price
            return { ...state };
        case "REMOVE":
            return state;
        default:
            return state
    }

}
export { cartReducer }