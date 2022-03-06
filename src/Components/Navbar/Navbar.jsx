import React from "react";
import { Link } from "react-router-dom";
import trottafede from "../Feed/trottafede.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg ">
      <div className="container">
        <Link to="/Home">
          <h1>Instagram</h1>
        </Link>

        <input
          id="search"
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div id="icons">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
          <Link to="/messages">
            <i className="fas fa-comment"></i>
          </Link>
          <Link to="/notFound">
            <i className="fas fa-plus-circle"></i>
          </Link>
          <Link to="/notFound">
            <i className="fas fa-compass"></i>
          </Link>
          <Link to="/likes">
            <i className="fas fa-heart"></i>
          </Link>
          <Link to="/profile">
            <img className="userImg" src={trottafede} alt="user" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
