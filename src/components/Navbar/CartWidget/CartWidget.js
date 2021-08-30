import React from "react";
import "./cartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="cart-icon">
      <Link to="/cart">
        <i className="bi bi-bag-fill"></i>
      </Link>
    </div>
  );
};

export default CartWidget;
