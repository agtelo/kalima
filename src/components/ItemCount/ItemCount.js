import React, { useState } from "react";
import "./itemCount.css";

const useCounter = (initialStock, initialValue = 1) => {
  const [count, setCount] = useState((initialValue = 1));
  const [stock, setStock] = useState((initialStock = 10));

  const increment = () => {
    if (stock > 0) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlerOnAdd = () => {
    if (stock >= count) {
      setStock(stock - count);
    } else {
      alert("No hay suficiente stock para realizar el pedido");
    }
  };

  return {
    count,
    stock,
    increment,
    decrement,
    handlerOnAdd,
  };
};

export default function ItemCount(initialStock) {
  const { stock, count, increment, decrement, handlerOnAdd } = useCounter(1);

  return (
    <>
      {stock > 0 && count === 1 && (
        <div className="container-itemCount">
          <h6 className="stock">Stock Disponible {stock} </h6>

          <div className="container-buttons">
            <button className="btn-count" onClick={() => decrement()}>
              <i className="bi bi-dash-square"></i>
            </button>
            <div className="quantity">{count}</div>
            <button className="btn-count" onClick={() => increment()}>
              <i className="bi bi-plus-square"></i>
            </button>
          </div>
          <div className="container-buttons">
            <button className="btn-add-product" onClick={() => handlerOnAdd()}>
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
      {stock > 0 && count > 1 && (
        <div className="container-itemCount">
          <h6 className="stock">Stock Disponible {stock} </h6>

          <div className="container-buttons">
            <button className="btn-count" onClick={() => decrement()}>
              <i className="bi bi-dash-square"></i>
            </button>
            <div className="quantity">{count}</div>
            <button className="btn-count" onClick={() => increment()}>
              <i className="bi bi-plus-square"></i>
            </button>
          </div>
          <div className="container-buttons">
            <button className="btn-add-product" onClick={() => handlerOnAdd()}>
              Agregar al carrito
            </button>
          </div>
        </div>
      )}

      {stock === 0 && (
        <div className="container-itemCount">
          <h6 className="stock">Stock Disponible {stock} </h6>
          <div className="container-buttons">
            <button className="btn-count" onClick={() => decrement()}>
              <i className="bi bi-dash-square"></i>
            </button>
            <div className="quantity">{count}</div>
            <button className="btn-count" onClick={() => increment()}>
              <i className="bi bi-plus-square"></i>
            </button>
          </div>
          <div className="container-buttons">
            <button className="btn-add-product">No hay stock</button>
          </div>
        </div>
      )}
      {stock < 0 && (
        <div className="container-itemCount">
          <h6 className="stock">Stock Disponible {stock + 1} </h6>
          <div className="container-buttons">
            <button className="btn-count" onClick={() => decrement()}>
              <i className="bi bi-dash-square"></i>
            </button>
            <div className="quantity">{count}</div>
            <button className="btn-count" onClick={() => increment()}>
              <i className="bi bi-plus-square"></i>
            </button>
          </div>
          <div className="container-buttons">
            <button className="btn-add-product">No hay stock</button>
          </div>
        </div>
      )}
    </>
  );
}
