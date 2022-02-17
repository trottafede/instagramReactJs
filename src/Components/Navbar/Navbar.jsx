import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h1>Instagram</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <form id="search" class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <i class="fas fa-home"></i>
            </li>
            <li className="nav-item">
              <i class="fas fa-comment"></i>
            </li>
            <li className="nav-item">
              <i class="fas fa-plus-circle"></i>
            </li>

            <li className="nav-item">
              <i class="fas fa-compass"></i>
            </li>
            <li className="nav-item">
              <i class="fas fa-heart"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
