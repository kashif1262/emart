import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            LA COLLECTION
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-capitalize"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="#">
                  product
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-capitalize">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-capitalize">
                  contact
                </a>
              </li>
            </ul>
            <div className="buttons ">
              <a href="#" className="btn btn-outline-dark text-capitalize ">
                login in
              </a>
              <a href="#" className="btn btn-outline-dark text-capitalize mx-2">
                register
              </a>
              <a href="#" className="btn btn-outline-dark text-capitalize">
                cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
