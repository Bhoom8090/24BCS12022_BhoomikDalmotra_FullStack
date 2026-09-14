import React from 'react';
import { useCurrency } from './CurrencyContext';

function CheckoutCart() {
  // get formatPrice from context
  let { formatPrice } = useCurrency();

  // subtotal in USD
  let subtotal = 150;

  return (
    <div>
      <h2>Order Summary</h2>
      
      <p>Subtotal: {formatPrice(subtotal)}</p>
    </div>
  );
}

export default CheckoutCart;
