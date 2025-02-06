import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCart } from "../../api/firebase";
import { useAuthContext } from "../../context/AuthContext";
import styles from "./CartStatus.module.css";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: product } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(uid),
  });

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
