import React from "react";

export default function CartItems({ cartItem }) {
  return (
    <div>
      <p>{cartItem.name}</p>
      <p>{cartItem.description}</p>
      <p>Rs. {cartItem.price}</p>
    </div>
  );
}
