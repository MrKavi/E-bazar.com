const initialState = [
    {
        id: 1,
        name: "Headphone",
        img: "https://cdn.shopify.com/s/files/1/0573/2309/4216/products/Miami_RubyRed_001.png?v=1656925796",
        price: 4000,
        description: "boAt Rockerz 550 Over Ear Bluetooth Headphones with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation, Without Mic (Army Green)",
    },
    {
        id: 2,
        name: "Mobile",
        img: "https://media.4rgos.it/i/Argos/1187269_R_Z001A?w=750&h=440&qlt=70",
        price: 132999,
        description: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    },
    {
        id: 3,
        name: "LED TV",
        img: "https://m.media-amazon.com/images/I/71d5fMDvq9L._SL1500_.jpg",
        price: 79999,
        description: "Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)",
    },

]

function productReducer(state = initialState, action) {
    return state
}

export { productReducer }
