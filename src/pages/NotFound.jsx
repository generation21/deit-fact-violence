import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        페이지를 찾을 수 없습니다. 홈페이지로 돌아가야합니다.
      </p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default NotFound;
