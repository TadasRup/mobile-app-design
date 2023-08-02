import React from 'react';
import CartItem from './CartItem';
import style from '../css/ProductCatalog.module.css'

const ShoppingCart = ({ cartItems, onRemoveFromCart }) => {
    
  return (
    <div>
      <h1 className={style.catalogtext}>SHOPPING CART</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
      ))}
    </div>
  );
};

export default ShoppingCart;
