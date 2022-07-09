import React from "react";

export default function ProductListing({ product, addItems }) {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>Rs. {product.price}</p>
      <button onClick={() => addItems(product)}>+</button>
    </div>
  );
}
