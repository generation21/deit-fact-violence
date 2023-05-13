import React from "react";
import { HOMEPAGEURL } from "src";
import styles from "./images.module.css";
export default function Twiter() {
  const handleOnClick = () => {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        "다이어트 팩트 폭력" +
        "&url=" +
        HOMEPAGEURL
    );
  };
  return (
    <button onClick={handleOnClick}>
      <img src="/icons/icon-twitter.png" alt="" className={styles.image} />
    </button>
  );
}
