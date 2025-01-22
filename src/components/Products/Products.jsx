import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../../api/firebase";
import ProductCard from "../ProductCard/ProductCard";

export default function Products({ section, category }) {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        const matchesSection = product.section === section;
        const matchesCategory =
          category === "all" || product.category === category;
        return matchesSection && matchesCategory;
      })
    : [];

  return (
    <div className="container-fluid px-5">
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
