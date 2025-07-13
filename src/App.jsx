import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import Header from './components/Header';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </>
  );
};

export default App;