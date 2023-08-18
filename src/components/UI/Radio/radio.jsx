import React from "react";
import styles from "./radio.module.scss";

export default function Radio({
  id,
  inputName,
  label,
  value,
  onChange,
  selectedValue,
}) {
  const isActive = selectedValue === value ? styles.active : "";

  const handleRadio = (value) => {
    onChange(value);
  };

  return (
    <div key={id} className={styles.radioContainer}>
      <label className={`${isActive}`}>
        <input
          type="radio"
          name={inputName}
          value={value}
          onChange={(e) => handleRadio(e.target.value)}
          checked={selectedValue === value}
        />
        <span className={`${styles.checkmark} ${isActive}`}>✔</span> {label}
      </label>
    </div>
  );
}
