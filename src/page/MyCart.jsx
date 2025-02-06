import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem/CartItem";
import PriceCard from "../components/PriceCard/PriceCard";
import { FaPlus, FaEquals } from "react-icons/fa6";

const SHIPPING = 3000;

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: product } = useQuery({
    queryKey: ["cart"],
    queryFn: () => {
      console.log(product);
    },
  });

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = product && product.length > 0;

  const totalPrice =
    product &&
    product.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className="p-5">
      <h6 className="my-5 text-center">My Cart</h6>
      {!hasProducts && (
        <h3 className="text-center p-3">Your shopping cart is empty😢</h3>
      )}
      {hasProducts && (
        <>
          <ul>
            {product &&
              product.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div>
            <PriceCard text="Order value" price={totalPrice} />
            <FaPlus />
            <PriceCard text="Shipping fee" price={SHIPPING} />
            <FaEquals />
            <PriceCard text="Total" price={totalPrice + SHIPPING} />
          </div>
        </>
      )}
    </section>
  );
}
