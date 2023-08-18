import React from "react";
import styles from "./menuFooter.module.scss";
import Button from "../../UI/Button/button";

export default function MenuFooter({ handleClear, isDisabled }) {
  return (
    <div className={styles.footerContainer}>
      <Button type="reset" onClick={handleClear} addclass={styles.buttonClear}>
        Clear
      </Button>
      <Button
        type="submit"
        addclass={`${styles.buttonSubmit} ${
          isDisabled ? styles.buttonDisabled : ""
        }`}
        disabled={isDisabled}
      >
        Order Food
      </Button>
    </div>
  );
}
