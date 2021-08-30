import { React, useState } from "react";
import ItemCount from "../../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./itemDetail.css";
const ItemDetail = ({
  img_product,
  product_type,
  model,
  description,
  brand,
  price,
  id,
  category,
  stock,
}) => {
  const [itemCountVisible, setItemCountVisible] = useState(true);
  const [buyButtonsVisible, setBuyButtonsVisible] = useState(true);
  const [count, setCount] = useState(0);
  const onAdd = (count) => {
    setCount(count);
  };
  const onAddToCart = () => {
    setItemCountVisible(false);
    setBuyButtonsVisible(false);
  };
  const onFinishBuy = () => {
    console.log(`Compra terminada. Agregaste ${count} productos al carrito`);
  };
  return (
    <>
      <Link to={`/${category}/${id}`}></Link>
      <div className="product-Container">
        <div className="details-container">
          <div className="product-detail-image">{img_product}</div>
          <div className="product-description">
            <h3>{product_type}</h3>
            <h3>{model}</h3>
            <br />
            <p>{price}</p>
            <p>{description}</p>
            <br />
            <br />
            <div className="counter">
              {itemCountVisible && <ItemCount stock={stock} onAdd={onAdd} />}
              {buyButtonsVisible && (
                <>
                  <button
                    className="btn-add-product"
                    onClick={onAddToCart}
                    count={count}
                  >
                    Agregar al Carrito
                  </button>
                </>
              )}
              {!buyButtonsVisible && (
                <Link to="/Cart">
                  <button className="btn-add-product" onClick={onFinishBuy}>
                    Finalizar Compra
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
