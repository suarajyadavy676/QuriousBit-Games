import React, { useState } from 'react';

const discounts = {
  "SUMMER20": 0.20,
  "WINTER10": 0.10
};

const currencyRates = {
  "USD": 1,
  "EUR": 0.9,
  "GBP": 0.75
};

function Checkout({ cart, discountCode, applyDiscount }) {
  const [currency, setCurrency] = useState("USD");
  const [discount, setDiscount] = useState(0);

  const calculateTotal = () => {
    let total = cart.reduce((acc, item) => acc + item.price, 0);
    if (discountCode && discounts[discountCode]) {
      total = total * (1 - discounts[discountCode]);
    }
    return (total * currencyRates[currency]).toFixed(2);
  };

  const handleDiscountChange = (e) => {
    const code = e.target.value;
    applyDiscount(code);
    setDiscount(discounts[code] || 0);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="discount-section">
        <input 
          type="text" 
          placeholder="Enter discount code" 
          onChange={handleDiscountChange} 
        />
      </div>
      <div className="currency-section">
        <label htmlFor="currency">Currency: </label>
        <select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div className="total-price">
        <h3>Total Price in {currency}: ${calculateTotal()}</h3>
      </div>
      <button onClick={() => alert(`Checkout complete! Total price: $${calculateTotal()} ${currency}`)}>Checkout</button>
    </div>
  );
}

export default Checkout;
