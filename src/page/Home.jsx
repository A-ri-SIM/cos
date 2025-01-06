import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className='mt-3'>
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner bg-white w-100 vh-100">
          <div id={styles.w_back} className="carousel-item active w-100 h-100 d-flex justify-content-center align-items-center" data-bs-interval="50000">
          
            <div id={styles.w_inner} className='border border-white border-5 overflow-hidden'>
            <Link to={'/'} aria-current="page">
            <img src="/img/woman_main.jpg" className="d-block w-100" alt="woman_main" />
            </Link>
            </div>
          </div>
          <div id={styles.m_back} className="carousel-item w-100 h-100 d-flex justify-content-center align-items-center" data-bs-interval="50000">
          
          <div id={styles.m_inner} className='border border-white border-5 overflow-hidden'>
          <Link to={'/'} aria-current="page">
          <img src="/img/man_main.jpg" className="d-block w-100" alt="man_main" />
          </Link>
          </div>
        </div>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
