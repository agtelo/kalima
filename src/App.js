import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartFunction } from "./components/contexts/CartContext";
import ItemList from "./components/ItemListContainer/ItemList/ItemList";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="Bienvenidos a Kalima" />
          </Route>
          <Route path="/:category" exact>
            <ItemList />
          </Route>
          <Route path="/:category/:id" exact>
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
