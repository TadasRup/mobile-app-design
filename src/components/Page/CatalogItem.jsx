import React from 'react';
import style from '../css/ProductCatalog.module.css'

const CatalogItem = ({ item, onAddToCart }) => {
  return (
    <div className={style.item}>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <button className={style.btnprimary} onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default CatalogItem;
