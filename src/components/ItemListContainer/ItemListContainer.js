import React, { useState } from "react";
import { items } from "./ItemList/ItemList";
import Item from "./Item/Item";

import "./itemListContainer.css";

const ItemListContainer = (props) => {
  const [state, setState] = useState([]);

  const getItemList = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  };

  getItemList().then((items) => setState(items));

  const itemProducts = state.map((item) => (
    <Item
      key={item.id}
      product_type={item.Product_type}
      brand={item.Brand}
      model={item.Model}
      price={"$" + item.Price}
      img_product={item.Img_product}
      stock={item.Stock}
    />
  ));

  return (
    <>
      <h3 className="greeting">{props.greeting}</h3>
      <div className="container">{itemProducts}</div>
    </>
  );
};

export default ItemListContainer;
