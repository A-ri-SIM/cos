import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, image, hoverImage, title, price },
}) {
  const [currentImage, setCurrentImage] = useState(image);
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      onMouseEnter={() => setCurrentImage(hoverImage)}
      onMouseLeave={() => setCurrentImage(image)}
      className="col-lg-3 col-md-6 p-4 gap-4"
      id={styles.card}
    >
      <img src={currentImage} alt={title} className="w-100 mb-3" />
      <h6>{title}</h6>
      <p>{`￦ ${price}`}</p>
    </li>
  );
}
