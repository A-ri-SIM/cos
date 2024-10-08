import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to={'/'} class="navbar-brand" aria-current="page">
          <img
            src="https://res.cloudinary.com/dyx0sjiyq/image/upload/v1728383296/logo_k3tcbu.png"
            alt="logo"
          />
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to={'/'} class="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link disabled" aria-disabled="true">
                Disabled
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
