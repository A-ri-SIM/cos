import React from 'react';

export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner bg-white w-100 vh-100">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="/img/woman_main.jpg" class="d-block w-50" alt="woman_main" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="/img/man_main.jpg" class="d-block w-50 float-end" alt="man_main" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
