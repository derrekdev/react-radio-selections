import React from "react";
import styles from "./button.module.scss";

export default function Button(props) {
  const { type, children, addclass } = props;

  return (
    <button type={type} className={`${styles.button} ${addclass}`} {...props}>
      {children}
    </button>
  );
}
