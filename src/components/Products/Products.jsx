import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../../api/firebase";
import ProductCard from "../ProductCard/ProductCard";

export default function Products({ section }) {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: getProducts });
  console.log(section);

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => product.section === section)
    : [];

  return (
    <div className="container-fluid p-5">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="row">
        {products &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
