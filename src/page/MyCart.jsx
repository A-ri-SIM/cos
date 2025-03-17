import React from "react";
import CartItem from "../components/CartItem/CartItem";
import PriceCard from "../components/PriceCard/PriceCard";
import { FaPlus, FaEquals } from "react-icons/fa6";
import styles from "./MyCart.module.css";
import Button from "../components/Button/Button";
import useCart from "../hooks/useCart";

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: product },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = product && product.length > 0;

  const totalPrice = product
    ? product.reduce((prev, current) => {
        let price = current.price;

        if (typeof price === "string") {
          price = price.replace(/,/g, "").trim();
        }

        price = Number(price);

        if (isNaN(price)) return prev;

        return prev + price * current.quantity;
      }, 0)
    : 0;

  return (
    <section
      className={`m-auto d-flex flex-column flex-fill p-5 ${styles.cartBox}`}
    >
      <h6 className="my-5 text-center">My Cart</h6>
      {!hasProducts && (
        <h3 className="text-center p-3">Your shopping cart is empty😢</h3>
      )}
      {hasProducts && (
        <>
          <ul>
            {product &&
              product.map((product) => (
                <CartItem
                  key={`${product.id}-${product.size}`}
                  product={product}
                />
              ))}
          </ul>
          <div className="d-flex justify-content-around align-items-center my-5 text-center">
            <PriceCard text="Order value" price={totalPrice} />
            <FaPlus className="fs-5 flex-shrink-0" />
            <PriceCard text="Shipping fee" price={SHIPPING} />
            <FaEquals className="fs-5 flex-shrink-0" />
            <PriceCard text="Total" price={totalPrice + SHIPPING} />
          </div>
          <Button text={"PROCEED TO CHECKOUT"} />
        </>
      )}
    </section>
  );
}
