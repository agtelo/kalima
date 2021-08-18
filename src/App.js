import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import Slider from "./components/Slider/Slider";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Slider />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="Bienvenidos a Kalima" />
          </Route>
          <Route path="/category" exact>
            <ItemListContainer greeting="Bienvenidos a Kalima" />
          </Route>
          <Route path="/category/:id" exact>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
