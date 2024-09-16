import React, { useState, useEffect } from "react";

const Discount = ({ setDiscount }) => {
  const [discountCode, setDiscountCode] = useState("");

  // Define the available discount codes and their respective percentages
  const discountCodes = {
    DISCOUNT10: 10,
    DISCOUNT20: 20,
    SUMMER15: 15,
    WINTER5: 5,
    SALE25: 25,
  };

  const handleApplyDiscount = () => {
    if (discountCodes[discountCode]) {
      const discountValue = discountCodes[discountCode];
      setDiscount(discountValue);
      alert(`Discount Applied: ${discountValue}%`);
    } else if (discountCode === "") {
      setDiscount(0); // Reset discount if the code is empty
      alert("No discount applied.");
    } else {
      alert("Invalid Discount Code");
    }
  };

  // Reset discount to 0 when the input is cleared
  useEffect(() => {
    if (discountCode === "") {
      setDiscount(0); // Reset discount when input is empty
    }
  }, [discountCode, setDiscount]);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Apply Discount</h2>
      <input
        type="text"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
        className="p-2 border rounded w-full"
        placeholder="Enter discount code"
      />
      <button
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={handleApplyDiscount}
      >
        Apply
      </button>
    </div>
  );
};

export default Discount;
