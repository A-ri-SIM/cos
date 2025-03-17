import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";

export default function Products({ section, category }) {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

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
