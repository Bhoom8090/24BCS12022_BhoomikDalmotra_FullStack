import React, { createContext, useState } from 'react';

// exchange rates lookup table
const EXCHANGE_RATES = {
  USD: { rate: 1.0, symbol: "$" },
  EUR: { rate: 0.85, symbol: "€" },
  GBP: { rate: 0.75, symbol: "£" },
  JPY: { rate: 110.0, symbol: "¥" }
};

// create context
const CurrencyContext = createContext();

// provider component
export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");

  // function to format price
  function formatPrice(usdAmount) {
    // check if currency exists in our table
    if (EXCHANGE_RATES[currency]) {
      // get the rate and symbol
      let rate = EXCHANGE_RATES[currency].rate;
      let symbol = EXCHANGE_RATES[currency].symbol;
      
      // do the conversion
      let converted = usdAmount * rate;
      
      // format with symbol and 2 decimal places
      return symbol + converted.toFixed(2);
    } else {
      // if currency not found, show amount and code
      return usdAmount.toFixed(2) + " " + currency;
    }
  }

  // function to change currency
  function changeCurrency(currencyCode) {
    setCurrency(currencyCode);
  }

  // return provider
  return (
    <CurrencyContext.Provider value={{ currency, changeCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

// custom hook to use currency
export function useCurrency() {
  let context = React.useContext(CurrencyContext);
  if (!context) {
    throw new Error("Must use useCurrency inside CurrencyProvider");
  }
  return context;
}
