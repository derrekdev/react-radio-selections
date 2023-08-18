import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./menu.module.scss";
import useFood from "../hooks/useFood";
import MenuChoices from "./MenuChoices/menuChoices";
import MenuFooter from "./MenuFooter/menuFooter";
import Alert from "../UI/Alert/alert";
import { FoodDataContext } from "../context/foodContext";
import { scrollToTop } from "../utils/scrollToTop";

const itemProps = [
  { name: "food-diet", title: "Food Diet" },
  { name: "food-dish", title: "Main Dish" },
  { name: "food-sides-sauce", title: "Sides/Sauce" },
];

export default function Menu() {
  const { menus, rules } = useContext(FoodDataContext);
  const { getCurrentRules, generateMenuRules } = useFood();

  const [menuData, setMenuData] = useState(menus);
  const [selectedMenus, setSelectedMenus] = useState([]);
  const [currentRules, setCurrentRules] = useState([]);
  const [isClearMenuChoices, setIsClearMenuChoices] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClear = useCallback(() => {
    setIsClearMenuChoices(true);
    setShowAlert(false);
    setSelectedMenus([]);
  }, []);

  const handleSelectedMenu = (index, value) => {
    setSelectedMenus((selectedMenu) => {
      const currentSelectedMenu = selectedMenu.filter(
        (item) => !currentRules.includes(parseInt(item))
      );
      currentSelectedMenu[index] = value;

      return [...currentSelectedMenu];
    });
  };

  useEffect(() => {
    setMenuData(generateMenuRules(selectedMenus, menus, rules));
    setCurrentRules(getCurrentRules(selectedMenus, rules));
  }, [selectedMenus]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      scrollToTop();
      setIsClearMenuChoices(true);
      setSelectedMenus([]);
      setShowAlert(true);
    },
    [selectedMenus]
  );

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.title}>Food Menu</h1>
        <Alert showAlert={showAlert} setShowAlert={setShowAlert} />
        <div className={styles.containerMenuChoices}>
          {!!menuData &&
            menuData.map((menu, index) => (
              <MenuChoices
                key={index}
                itemProps={itemProps}
                index={index}
                data={menu}
                handleSelectedMenu={handleSelectedMenu}
                clearChoices={isClearMenuChoices}
                setIsClearMenuChoices={setIsClearMenuChoices}
                selectedMenus={selectedMenus}
                showMenuChoices={index === 0 || selectedMenus.length > 0}
              />
            ))}
        </div>
        <MenuFooter
          handleClear={handleClear}
          isDisabled={
            selectedMenus.filter((item) => !!item).length < menus.length
          }
        />
      </form>
    </div>
  );
}
