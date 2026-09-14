import React from 'react';
import { useCurrency } from './CurrencyContext';

function StoreHeader() {
  // get currency and changeCurrency from context
  let { currency, changeCurrency } = useCurrency();

  // list of currencies
  let currencyList = ["USD", "EUR", "GBP", "JPY"];

  return (
    <div>
      <h1>Global Store</h1>
      
      <p>Select Currency:</p>
      
      <div>
        {currencyList.map(function(code) {
          return (
            <button
              key={code}
              onClick={function() { changeCurrency(code); }}
            >
              {code}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StoreHeader;
