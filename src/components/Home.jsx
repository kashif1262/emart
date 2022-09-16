import React from "react";
import Cloth from "../img/1.jpg";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0 rounded-0">
        <img
          src={Cloth}
          className="card-img"
          alt="..."
          style={{ height: "100vh" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-uppercase">
              new season arival
            </h5>
            <p className="card-text text-uppercase fs-2">
              checkout all the trends
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
