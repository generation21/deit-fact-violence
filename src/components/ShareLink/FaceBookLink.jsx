import React from "react";
import { HOMEPAGEURL } from "src";
import styles from "./images.module.css";

export default function FaceBookLink() {
  const handleOnClick = () => {
    window.open("http://www.facebook.com/sharer.php?u=" + HOMEPAGEURL);
  };
  return (
    <button onClick={handleOnClick}>
      <img
        src="/icons/fackbook.avif"
        alt="facebook share"
        className={styles.image}
      />
    </button>
  );
}
