import React from "react";
import { Link } from "react-router-dom";
import Brand from "../Brand";
import CartWidget from "../Navbar/CartWidget/CartWidget";
import "./navBar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Brand />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-lg-4">
              <Link to="/card-sliders" className="nav-link">
                <p>Card Sliders</p>
              </Link>
              <Link to="/billeteras" className="nav-link">
                <p>Billeteras</p>
              </Link>
              <Link to="/billeteras-dobles" className="nav-link">
                <p>Billeteras Dobles</p>
              </Link>
              <Link to="relojes/" className="nav-link">
                <p>Relojes</p>
              </Link>
              <Link to="/mochilas" className="nav-link">
                <p>Mochilas</p>
              </Link>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
