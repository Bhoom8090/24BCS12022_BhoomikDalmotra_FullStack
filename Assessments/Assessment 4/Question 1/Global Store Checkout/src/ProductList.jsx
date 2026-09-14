import React from 'react';
import { useCurrency } from './CurrencyContext';

function ProductList() {
  // get formatPrice from context
  let { formatPrice } = useCurrency();

  // price in USD
  let price = 100;

  return (
    <div>
      <h2>Our Products</h2>
      
      <div>
        <h3>Wireless Headphones</h3>
        
        <p>Price: {formatPrice(price)}</p>
        
        <button>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductList;
