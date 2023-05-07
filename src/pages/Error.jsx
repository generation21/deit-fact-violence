import React from "react";
import styles from "./Error.module.css";

const Error = ({ errorMessage }) => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.title}>오류 발생</h1>
      <p className={styles.message}>{errorMessage}</p>
    </div>
  );
};

export default Error;
