import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";

import "./itemDetail.css";

const ItemDetail = (props) => {
  return (
    <>
      <div className="product-Container">
        <div className="details-container">
          <div className="product-detail-image">{props.img_product}</div>
          <div className="product-description">
            <h3>{props.product_type}</h3>
            <h3>{props.model}</h3>
            <br />
            <p>{props.price}</p>
            <p>{props.description}</p>
            <div className="counter"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
