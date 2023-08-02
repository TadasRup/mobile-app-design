import React from 'react';

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <button onClick={() => onRemoveFromCart(item)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
