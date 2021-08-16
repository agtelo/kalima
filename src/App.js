import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import Slide from "./components/Slide/Slide";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Slide />
      <ItemListContainer greeting="Bienvenidos a Kalima" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
