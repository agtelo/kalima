import React from "react";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-icon">
      <a href="/">
        <i className="bi bi-bag-fill"></i>
      </a>
    </div>
  );
};

export default CartWidget;
