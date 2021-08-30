import { React, useState, useEffect } from "react";
import { items } from "./ItemList/ItemList";
import Item from "./Item/Item";
import { useParams } from "react-router-dom";
import Slider from "../Slider/Slider";
import "./itemListContainer.css";

const ItemListContainer = (props) => {
  const [list, setList] = useState([]);

  const { category, id } = useParams();

  useEffect(() => {
    const getProductDetail = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(items);
        }, 2000);
      });
    };
    getList();
    async function getList() {
      const productList = await getProductDetail();
      if (category !== undefined) {
        const listItem = productList.filter(
          (item) => item.Category === category
        );
        const itemProducts = listItem.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            product_type={item.Product_type}
            category={item.Category}
            brand={item.Brand}
            model={item.Model}
            desciption={item.Desciption}
            price={"$" + item.Price}
            img_product={item.Img_product}
            stock={item.Stock}
          />
        ));
        setList(itemProducts);
      } else {
        const itemProducts = productList.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            product_type={item.Product_type}
            category={item.Category}
            brand={item.Brand}
            model={item.Model}
            desciption={item.Desciption}
            price={"$" + item.Price}
            img_product={item.Img_product}
            stock={item.Stock}
          />
        ));
        setList(itemProducts);
      }
    }
  }, [category, list]);

  return (
    <>
      <Slider />
            <h3 className="greeting">{props.greeting}</h3>
            <div className="container">{list}</div>
          
    </>
  );
};

export default ItemListContainer;
