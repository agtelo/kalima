import React from "react";
import Brand from "../Brand";

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
              <a className="nav-link" href="/">
                Card Sliders
              </a>
              <a className="nav-link" href="/">
                Billeteras
              </a>
              <a className="nav-link" href="/">
                Billeteras Dobles
              </a>
              <a className="nav-link" href="/">
                Relojes
              </a>
              <a className="nav-link" href="/">
                Mochilas
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
