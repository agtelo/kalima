import React from "react";
import Item from "./Item/Item";
import "./itemListContainer.css";

const items = [
  {
    id: 1,
    Product_type: "Card Slider",
    Brand: "Walla",
    Model: "Black",
    Price: 2050,
    Stock: 15,
    Img_product: (
      <img src="/images/product/card-sliders/slider-black-frente.jpg" alt="" />
    ),
  },
  {
    id: 2,
    Product_type: "Card Slider",
    Brand: "Walla",
    Model: "Fire",
    Price: 2050,
    Stock: 4,
    Img_product: (
      <img src="/images/product/card-sliders/slider-fire-frente.jpg" alt="" />
    ),
  },
  {
    id: 3,
    Product_type: "Card Slider",
    Brand: "Walla",
    Model: "Silver",
    Price: 2050,
    Stock: 2,
    Img_product: (
      <img src="/images/product/card-sliders/slider-silver-frente.jpg" alt="" />
    ),
  },
  {
    id: 4,
    Product_type: "Card Slider",
    Brand: "Walla",
    Model: "Marino",
    Price: 2050,
    Stock: 7,
    Img_product: (
      <img src="/images/product/card-sliders/slider-marino-frente.jpg" alt="" />
    ),
  },
  {
    id: 5,
    Product_type: "Card Slider",
    Brand: "Walla",
    Model: "Cubic Bx",
    Price: 2750,
    Stock: 10,
    Img_product: <img src="/images/product/card-sliders/cubic-bx.jpg" alt="" />,
  },
  {
    id: 6,
    Product_type: "Card Slider",
    Brand: "Walla",
    Model: "Cubic Black",
    Price: 2750,
    Stock: 3,
    Img_product: (
      <img src="/images/product/card-sliders/cubic-black.jpg" alt="" />
    ),
  },
  {
    id: 6,
    Product_type: "Card Slider",
    Brand: "Walla",
    Model: "Marino Net",
    Price: 2750,
    Stock: 3,
    Img_product: (
      <img src="/images/product/card-sliders/net-marino.jpg" alt="" />
    ),
  },
  {
    id: 6,
    Product_type: "Card Slider",
    Brand: "Walla",
    Model: "Overlock Grey",
    Price: 2750,
    Stock: 3,
    Img_product: (
      <img src="/images/product/card-sliders/overlook-grey.jpg" alt="" />
    ),
  },
];

const getItemList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
};
getItemList().then((items) => console.log(items));

const itemProducts = items.map((item) => (
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
const ItemListContainer = (props) => {
  return (
    <>
      <h3 className="greeting">{props.greeting}</h3>
      <div className="container">{itemProducts}</div>
    </>
  );
};

export default ItemListContainer;
