import React from 'react';
import { CurrencyProvider } from './CurrencyContext';
import StoreHeader from './StoreHeader';
import ProductList from './ProductList';
import CheckoutCart from './CheckoutCart';

function App() {
  return (
    <CurrencyProvider>
      <div>
        <StoreHeader />
        <ProductList />
        <CheckoutCart />
      </div>
    </CurrencyProvider>
  );
}

export default App;
