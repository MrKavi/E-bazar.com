
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Product from './components/product/product';
import Cart from './components/cart/cart';
import ProductDetails from './components/product/product-details';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
