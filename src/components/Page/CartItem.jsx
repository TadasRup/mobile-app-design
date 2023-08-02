import React from 'react';
import style from "../css/ProductCatalog.module.css"

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className={style.item}>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <button className={style.btnprimary} onClick={() => onRemoveFromCart(item)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
