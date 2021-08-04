import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Kalima" />
    </div>
  );
}

export default App;
