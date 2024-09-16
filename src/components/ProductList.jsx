import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
