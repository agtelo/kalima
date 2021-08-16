import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";

import "./itemDetail.css";

const ItemDetail = (props) => {
  return (
    <>
      <div className="product-Container">
        <div className="details-container">
          <div className="product-image">{props.img_product}</div>
          <div className="product-description">
            <h3>
              {props.product_type}

              {props.brand}
            </h3>
            <h2>{props.price}</h2>
            <div className="counter">
              <ItemCount productStock={props.stock} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
