

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);  

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="product-list">
        <h1>WP ASSIGNMENT 3</h1>
        <h1>Ahsan Ijaz 23PWBCS1012 3rd CS Section B</h1>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product._id} className="product-item">
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>RS {product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
