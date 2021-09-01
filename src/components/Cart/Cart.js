import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <button onClick={removeItem}>borrar</button>
      <h2>Carrito de Compras</h2>
      <h2>proximamente</h2>
    </>
  );
};

export default Cart;
