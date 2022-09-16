import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const responce = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await responce.clone().json());
        setFilter(await responce.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading</>;
  };

  const filterProduct = (cet) => {
    const updatedList = data.filter((x) => x.category === cet);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2 text-capitalize"
            onClick={() => setFilter(data)}
          >
            all
          </button>
          <button
            className="btn btn-outline-dark me-2 text-capitalize"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 text-capitalize"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 text-capitalize"
            onClick={() => filterProduct("jewelery")}
          >
            jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2 text-capitalize"
            onClick={() => filterProduct("electronics")}
          >
            electronics
          </button>
        </div>
        {filter.map((p) => {
          return (
            <div className="col-md-3 my-2 mx-2 " key={p.id}>
              <div
                className="card h-100 text-center p-4 "
                style={{ width: "18rem" }}
              >
                <img src={p.image} className="card-img-top" alt={p.title} />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">Rs. {p.price}</p>
                  <a href="#" className="btn btn-primary">
                    buy now
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-border text-center">latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
