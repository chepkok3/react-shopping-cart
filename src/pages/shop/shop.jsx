import React from 'react';
import { productsArray } from '../../products';
import { Product } from './product';
import './shop.css';

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>SmartPhone Shop</h1>
      </div>
      <div className="products">
        {productsArray.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
