import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div
          id={styles.main_inner}
          className="carousel-inner bg-white w-100 vh-100"
        >
          <div
            className="carousel-item active w-100 h-100"
            data-bs-interval="8000"
          >
            <Link to={"/products/women"} aria-current="page">
              <div className="d-flex justify-content-between">
                <img
                  id={styles.w_inner}
                  src="/img/woman_main.jpg"
                  className="d-block"
                  alt="woman_main"
                />
                <img
                  className="h-100 d-none d-md-block"
                  src="/img/main_logo_left.png"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div className="carousel-item w-100 h-100" data-bs-interval="8000">
            <Link to={"/products/man"} aria-current="page">
              <div className="d-flex justify-content-between">
                <img
                  className="h-100 d-none d-md-block"
                  src="/img/main_logo_right.png"
                  alt=""
                />
                <img
                  id={styles.m_inner}
                  src="/img/man_main.jpg"
                  className="d-block"
                  alt="woman_main"
                />
              </div>
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
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
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
