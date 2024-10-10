import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light w-100 bg-white"
      id={styles.header}
    >
      <div className="container-fluid w-100  d-flex justify-content-between align-items-end ">
        <Link
          to={'/'}
          id={styles.logo}
          className="navbar-brand mx-1 pb-0"
          aria-current="page"
        >
          <img
            className="w-100"
            src="https://res.cloudinary.com/dyx0sjiyq/image/upload/v1728383296/logo_k3tcbu.png"
            alt="logo"
          />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="w-100 collapse navbar-collapse md:d-flex justify-content-between"
          id="navbarNav"
        >
          <div>
            <ul className="navbar-nav">
              <li className="nav-item  ">
                <Link to={'/products/woman'} className="nav-link pb-0">
                  Woman
                </Link>
              </li>
              <li className="nav-item p-0">
                <Link to={'/products/man'} className="nav-link pb-0">
                  Man
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link pb-0">cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pb-0">login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
