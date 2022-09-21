import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddCart } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(AddCart(product));
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await responce.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <div>Loading ...</div>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 pt-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width={"400px"}
          />
        </div>
        <div className="col-md-6 justify-content-start text-start pt-5">
          <h4 className="text-uppercase text-block 50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">Rating {product.rating && product.rating.rate}</p>
          <h3 className="display-6 fw-bold my-4 ">$ {product.price} </h3>
          <p className="lead">{product.description}</p>
          <button
            onClick={() => addProduct(product)}
            className="btn btn-outline-dark"
          >
            add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark mx-2">
            go to cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div className="container">
      <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Product;
