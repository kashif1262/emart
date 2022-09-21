import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const state = useSelector((state) => state.HandleCart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            LA COLLECTION
          </NavLink>
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
                <NavLink
                  className="nav-link active text-capitalize"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-capitalize" to="/products">
                  products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-capitalize">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-capitalize">
                  contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons ">
              <NavLink
                to="/login"
                className="btn btn-outline-dark text-capitalize "
              >
                login in
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-outline-dark text-capitalize mx-2"
              >
                register
              </NavLink>
              <NavLink
                to="/cart"
                className="btn btn-outline-dark text-capitalize"
              >
                cart {state.length}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
