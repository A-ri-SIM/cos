import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button/Button";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, hoverImage, title, price, category, size },
    },
  } = useLocation();

  const [selected, setSelected] = useState(size && size[0]);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleClick = (e) => {
    console.log(id);
  };

  return (
    <section className="d-flex flex-column flex-md-row align-items-center vh-100">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide w-100 w-md-50 p-5"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={image}
              className={`${styles.product_img} d-block mx-auto`}
              alt="image"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={hoverImage}
              className={`${styles.product_img} d-block mx-auto`}
              alt="hoverImage"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="w-100 w-md-50 p-5 d-flex flex-column">
        <p>{category}</p>
        <h4 className="mb-4">{title}</h4>
        <h6>{`￦ ${price}`}</h6>
        <div className="d-flex align-items-center">
          <h6 className="m-0">size : </h6>
          <select
            className="flex-fill mx-3"
            onChange={handleSelect}
            value={selected}
          >
            {size &&
              size.map((size, index) => <option key={index}>{size}</option>)}
          </select>
        </div>
        <Button text="add to cart" onClick={handleClick} />
      </div>
    </section>
  );
}
