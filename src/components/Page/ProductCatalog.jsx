import React, { useState } from 'react';
import Catalog from './Catalog';
import ShoppingCart from './ShoppingCart';
import data from '../Page/data';

const ProductCatalog = () => {

const { productItems } = data;

const [cartItems, setCartItems] = useState([]);

const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
};

const removeFromCart = (item) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
};

  return (
    <div>
        <h1>Product Catalog</h1>
        <div className="product-catalog-container">
        <Catalog items={productItems} onAddToCart={addToCart} />
        <ShoppingCart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
      </div>
    </div>
  );
};


export default ProductCatalog;
