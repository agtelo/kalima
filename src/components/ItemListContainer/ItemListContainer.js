import ItemList from "./ItemList/ItemList";
import Slider from "../Slider/Slider";
import "./itemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div>
      <Slider />
      <h2>{props.gretting}</h2>
      <div>
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
