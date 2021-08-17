import React from "react";
import "./item.css";

const Item = (props) => {
  return (
    <>
      <div className="card">
        <div className="product-image">{props.img_product}</div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>{props.product_type}</strong>
              <br />
              <strong>{props.model}</strong>
            </li>
            <li className="list-group-item-price">
              <p>{props.price}</p>
            </li>
          </ul>
          <button type="button" className="btn-more">
            Ver Detalle
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
