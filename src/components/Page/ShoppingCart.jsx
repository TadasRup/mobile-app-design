import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Your shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
      ))}
    </div>
  );
};

export default ShoppingCart;
