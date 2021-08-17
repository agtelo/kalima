import { React, useState, useEffect } from "react";
import { items } from "./ItemList/ItemList";
import Item from "./Item/Item";

import "./itemListContainer.css";

const ItemListContainer = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getProductDetail = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(items);
        }, 2000);
      });
    };
    getProductDetail().then((items) => console.log(items));
    getList();
    async function getList() {
      const productList = await getProductDetail();
      setList(productList);
    }
  }, []);
  const listItem = list.filter((item) => item.Category === "Card Slider");
  const itemProducts = listItem.map((item) => (
    <Item
      key={item.id}
      product_type={item.Product_type}
      brand={item.Brand}
      model={item.Model}
      desciption={item.desciption}
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
