import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h1>Instagram</h1>
        </a>

        <input
          id="search"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div id="icons">
          <i class="fas fa-home"></i>
          <i class="fas fa-comment"></i>
          <i class="fas fa-plus-circle"></i>
          <i class="fas fa-compass"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
