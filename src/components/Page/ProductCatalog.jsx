import React, { useState } from 'react';
import Catalog from './Catalog';
import ShoppingCart from './ShoppingCart';
import data from '../Page/data';
import style from '../css/ProductCatalog.module.css'

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
        <h1 className={style.item}>PRODTECH ITEMS</h1>
        <div className={style}>
        <Catalog items={productItems} onAddToCart={addToCart} />
        <ShoppingCart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
      </div>
    </div>
  );
};


export default ProductCatalog;
