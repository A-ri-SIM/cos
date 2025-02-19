import React from "react";
import {
  PiPlusCircleLight,
  PiMinusCircleLight,
  PiTrashLight,
} from "react-icons/pi";
import { addOrUpdateToCart, removeFromCart } from "../../api/firebase";
import styles from "./CartItem.module.css";

export default function CartItem({ product, uid }) {
  const handleMinus = () => {
    if (product.quantity < 2) return;
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
    <li
      id={styles.cartItemBox}
      className="m-auto d-flex justify-content-between align-items-center py-3 p-md-5 border-bottom border-dark "
    >
      <div className={styles.cartImg}>
        <img className="w-100" src={product.image} alt={product.title} />
      </div>
      <div className="d-flex flex-fill flex-column flex-md-row justify-content-between align-items-md-center">
        <p className="m-0">{product.section}</p>
        <h6 className="m-0">{product.title}</h6>
        <p className="m-0">{product.size}</p>
        <p className="m-0">{`￦ ${product.price}`}</p>
        <div className="d-flex align-items-center fs-5">
          <PiMinusCircleLight
            className={styles.quantityBtn}
            onClick={handleMinus}
          />
          <span className="mx-1">{product.quantity}</span>
          <PiPlusCircleLight
            className={styles.quantityBtn}
            onClick={handlePlus}
          />
          <PiTrashLight
            id={styles.trash}
            className={styles.quantityBtn}
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  );
}
