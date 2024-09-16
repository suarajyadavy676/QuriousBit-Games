import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Discount from "./components/Discount";
import Cart from "./components/Cart";


const products = [
  { id: "1", name: "Laptop", price: 1000, category: "Electronics" },
  { id: "2", name: "T-shirt", price: 20, category: "Fashion" },
  { id: "3", name: "Headphones", price: 200, category: "Electronics" },
];

// Static conversion rates
const conversionRates = {
  USD: 1,    // Base currency
  EUR: 0.85, // 1 USD = 0.85 EUR
  GBP: 0.75, // 1 USD = 0.75 GBP
};

function App() {
  const [cart, setCart] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [discount, setDiscount] = useState(0);

  // Convert the price based on selected currency
  const convertCurrency = (amount) => {
    return (amount * conversionRates[currency]).toFixed(2);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    const discountedTotal = total - (total * discount) / 100;
    return convertCurrency(discountedTotal);
  };

  const checkout = () => {
    const total = calculateTotal();
    alert(`Your final price after discount is ${currency} ${total}. Thanks for shopping!`);
    setCart([]); // Clear the cart after checkout
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Discount setDiscount={setDiscount} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        total={calculateTotal()}
        currency={currency}
        setCurrency={setCurrency}
        checkout={checkout}
      />
    </div>
  );
}

export default App;
