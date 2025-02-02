

import React from 'react';
import { CartProvider } from './context/CartContext';  
import ProductList from './components/ProductList';    
import Cart from './components/Cart';  
import './App.css'; 

function App() {
  return (
    <CartProvider>  
      <div className="App">
        <h1>Shopping Cart System</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
