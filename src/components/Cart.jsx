import React from "react";

const Cart = ({ cart, removeFromCart, total, currency, setCurrency, checkout }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between p-2 border-b">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className="mt-4">
        <h3 className="text-xl">Total: {currency} {total}</h3>
        <select
          className="mt-2 p-2 border rounded"
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <div className="mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
