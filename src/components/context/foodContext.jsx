import React, { createContext, useMemo, useState } from "react";
import useFood from "../hooks/useFood";

export const FoodDataContext = createContext();

export default function FoodContext({ children }) {
  const { getData } = useFood();
  const foodMenuData = getData();

  const contextValue = useMemo(
    () => ({
      menus: !!foodMenuData.menus ? foodMenuData.menus : [],
      rules: !!foodMenuData.rules ? foodMenuData.rules : [],
    }),
    [foodMenuData.menus, foodMenuData.rules]
  );

  return (
    <FoodDataContext.Provider value={contextValue}>
      {children}
    </FoodDataContext.Provider>
  );
}
