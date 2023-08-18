import React, { useEffect, useRef, useState } from "react";
import styles from "./menuChoices.module.scss";
import Radio from "../../UI/Radio/radio";

export default function MenuChoices({
  itemProps,
  index,
  data,
  handleSelectedMenu,
  showMenuChoices,
  clearChoices,
  setIsClearMenuChoices,
  selectedMenus,
}) {
  const itemMenuProps = itemProps[index];
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (clearChoices) {
      setSelectedValue("");
      setIsClearMenuChoices(false);
    }
  }, [clearChoices]);

  const handleMenuValue = (menuValue) => {
    setSelectedValue(menuValue);
    handleSelectedMenu(index, menuValue);
  };

  useEffect(() => {
    if (!selectedMenus.includes(selectedValue)) {
      setSelectedValue("");
    }
  }, [selectedMenus]);

  return (
    <div
      className={`${styles.choiceContainer} ${
        !showMenuChoices ? styles.hide : ""
      }`}
    >
      <h2 className={styles.subTitle}>
        {!!itemMenuProps ? itemMenuProps.title : ""}
      </h2>
      <div className={styles.choiceSelectionBlock}>
        {!!data &&
          data.map((item) => (
            <Radio
              key={item.id}
              id={item.id}
              value={item.id}
              inputName={!!itemMenuProps ? itemMenuProps.name : index}
              label={item.value}
              onChange={handleMenuValue}
              selectedValue={selectedValue}
            />
          ))}
      </div>
    </div>
  );
}
