import { React, useState, useEffect } from "react";
import data from "../../../data/data";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (props) => {
  const [list, setList] = useState([]);

  const { category, id } = useParams();

  useEffect(() => {
    const getProductDetail = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    }; //getProductDetail().then((items) => console.log(items));
    getList();
    async function getList() {
      const productList = await getProductDetail();
      if (id !== undefined) {
        const listItem = productList.filter((item) => item.id == id);
        const itemProducts = listItem.map((item) => (
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
        setList(itemProducts);
      } else {
        const itemProducts = productList.map((item) => (
          <ItemDetail
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
  }, [id, list]);

  return (
    <>
            <h3 className="greeting">{props.greeting}</h3>
            <div className="container">{list}</div>
          
    </>
  );
};

export default ItemDetailContainer;
