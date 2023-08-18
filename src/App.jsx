import "./components/styles/styles.module.scss";
import FoodContext from "./components/context/foodContext";
import Menu from "./components/Menu/menu";

function App() {
  return (
    <FoodContext>
      <Menu />
    </FoodContext>
  );
}

export default App;
