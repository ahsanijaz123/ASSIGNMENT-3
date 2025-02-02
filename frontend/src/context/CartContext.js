
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (product) => {
    const productExists = cart.find(item => item._id === product._id);
    if (productExists) {
      setCart(cart.map(item => 
        item._id === product._id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) return; 
    setCart(cart.map(item => 
      item._id === productId ? { ...item, quantity } : item
    ));
  };

 
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

