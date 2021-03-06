import React, { useState } from "react";
import "./itemCount.css";

const useCounter = (initialStock, initialValue = 1) => {
  const [count, setCount] = useState((initialValue = 1));
  const [stock, setStock] = useState((initialStock = 50));

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      setCount(count);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return {
    count,
    stock,
    increment,
    decrement,
  };
};

export default function ItemCount(initialStock) {
  const { count, increment, decrement } = useCounter(1);

  return (
    <>
      <div className="container-itemCount">
        <div className="container-buttons">
          <button className="btn-count" onClick={decrement}>
            <i className="bi bi-dash-square"></i>
          </button>
          <div className="quantity">{count}</div>
          <button className="btn-count" onClick={increment}>
            <i className="bi bi-plus-square"></i>
          </button>
        </div>
        <div className="container-buttons"></div>
      </div>
    </>
  );
}
