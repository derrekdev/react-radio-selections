import React from "react";
import styles from "./alert.module.scss";
import Button from "../Button/button";

export default function Alert({ showAlert, setShowAlert }) {
  const alertClass = showAlert ? styles.show : "";

  return (
    <div className={`${styles.alertContainer} ${alertClass}`}>
      <div className={styles.alertHeader}>
        <div>Successfully Ordered a food</div>
        <div>
          <Button
            type="button"
            onClick={() => {
              setShowAlert(false);
            }}
            addclass={styles.close}
          >
            &#x2715;
          </Button>
        </div>
      </div>
    </div>
  );
}
