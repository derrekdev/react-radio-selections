import foodJson from "../../data/food.json";

const useFood = () => {
  const getData = () => {
    return foodJson;
  };

  const getCurrentRules = (selectedMenus, rules) => {
    return selectedMenus.reduce((currentMenu, currentValue) => {
      if (rules[currentValue]) {
        currentMenu.push(...rules[currentValue]);
      }

      return currentMenu;
    }, []);
  };

  const generateMenuRules = (selectedMenus, menus, rules) => {
    if (!!!selectedMenus || selectedMenus.length === 0) return menus;

    const currentRules = getCurrentRules(selectedMenus, rules);

    const newMenus = menus.map((menu) => {
      return menu.filter((item) => !currentRules.includes(parseInt(item.id)));
    });

    return newMenus;
  };

  return {
    getData,
    getCurrentRules,
    generateMenuRules,
  };
};

export default useFood;
