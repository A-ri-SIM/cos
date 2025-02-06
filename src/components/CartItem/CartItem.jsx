import React from "react";
import {
  PiPlusCircleLight,
  PiMinusCircleLight,
  PiTrashLight,
} from "react-icons/pi";
import { addOrUpdateToCart, removeFromCart } from "../../api/firebase";

export default function CartItem({ product, uid }) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: product.quantity - 1 });
  };
  const handlePlus = () => {
    console.log(product);

    addOrUpdateToCart(uid, { ...product, quantity: product.quantity + 1 });
  };
  const handleDelete = () => {
    removeFromCart(uid, product.id);
  };
  return (
    <li>
      <img src={product.image} alt={product.title} />
      <div>
        <p>{product.section}</p>
        <h6>{product.title}</h6>
        <p>{product.size}</p>
        <p>{product.price}</p>
        <div>
          <PiMinusCircleLight onClick={handleMinus} />
          <span>{product.quantity}</span>
          <PiPlusCircleLight onClick={handlePlus} />
          <PiTrashLight onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
