import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Kalima" />
      <ItemCount />
    </div>
  );
}

export default App;
