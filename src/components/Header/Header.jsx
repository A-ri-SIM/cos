import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import User from "../User/User";
import { FiPlus } from "react-icons/fi";
import { useAuthContext } from "../../context/AuthContext";
import CartStatus from "../CartStatus/CartStatus";

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light w-100 bg-white fixed-top pt-0"
      id={styles.header}
    >
      <div className="container-fluid w-100  d-flex justify-content-between align-items-end ">
        <Link
          to={"/"}
          id={styles.logo}
          className="navbar-brand mx-1 d-flex align-items-end"
          aria-current="page"
        >
          <img
            className="w-100"
            src="https://res.cloudinary.com/dyx0sjiyq/image/upload/v1728383296/logo_k3tcbu.png"
            alt="logo"
          />
        </Link>

        <button
          className="navbar-toggler border-0 pb-0"
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
          className="w-100 collapse navbar-collapse md:d-flex justify-content-between align-items-end"
          id="navbarNav"
        >
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/products/women"} className="nav-link pb-0">
                  Women
                </Link>
              </li>
              <li className="nav-item p-0">
                <Link to={"/products/man"} className="nav-link pb-0">
                  Man
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link to={"/cart"} className="nav-link pb-0">
                  <CartStatus />
                </Link>
              </li>
              {user && user.isAdmin && (
                <li className="nav-item d-flex align-items-end ">
                  <Link to={"/products/new"} className="nav-link  py-0">
                    <FiPlus className="d-none d-lg-block pb-1 fs-5" />
                  </Link>
                </li>
              )}
              <li className="nav-item d-flex align-items-end">
                {user && <User user={user} />}
              </li>
              <li className="nav-item pb-0">
                {!user && (
                  <button
                    onClick={() => {
                      login();
                    }}
                    className="nav-link pb-0"
                  >
                    login
                  </button>
                )}
                {user && (
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className="nav-link pb-0"
                  >
                    logout
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
