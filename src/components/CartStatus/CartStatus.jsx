import React from "react";
import styles from "./CartStatus.module.css";
import useCart from "../../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: product },
  } = useCart();

  return (
    <div className="d-flex">
      cart
      {product && (
        <p
          id={styles.cart_counte}
          className="bg-black rounded-circle text-center text-light m-0 ms-2"
        >
          {product.length}
        </p>
      )}
    </div>
  );
}
