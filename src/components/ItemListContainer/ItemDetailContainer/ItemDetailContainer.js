import { React, useState, useEffect } from "react";
import { items } from "../ItemList/ItemList";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
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
    getProductDetail().then(items);
    getList();
    async function getList() {
      const productList = await getProductDetail();
      setList(productList);
    }
  }, []);
  const detailItem = list.find((item) => item.id === id);
  const detailProducts = detailItem.map((item) => (
    <ItemDetail
      key={item.id}
      id={item.id}
      product_type={item.Product_type}
      category={item.Category}
      brand={item.Brand}
      model={item.Model}
      description={item.Description}
      price={"$" + item.Price}
      img_product={item.Img_product}
      stock={item.Stock}
    />
  ));

  return (
    <div>
      <>{detailProducts}</>
    </div>
  );
};

export default ItemDetailContainer;
