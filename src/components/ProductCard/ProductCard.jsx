import React, { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  product: { id, image, hoverImage, title, price },
}) {
  const [currentImage, setCurrentImage] = useState(image);
  return (
    <li
      onMouseEnter={() => setCurrentImage(hoverImage)}
      onMouseLeave={() => setCurrentImage(image)}
      className="col-lg-3 col-md-6 p-3 gap-4"
      id={styles.card}
    >
      <img src={currentImage} alt={title} className="w-100 mb-3" />
      <h6>{title}</h6>
      <p>{`￦ ${price}`}</p>
    </li>
  );
}
