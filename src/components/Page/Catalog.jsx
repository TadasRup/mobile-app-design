import React from 'react';
import CatalogItem from './CatalogItem';

const Catalog = ({ items, onAddToCart }) => {
  return (
    <div>
      {items.map((item) => (
        <CatalogItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default Catalog;
