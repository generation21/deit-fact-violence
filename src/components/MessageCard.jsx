import React, { useContext } from "react";
import LanguageContext from "src/context/LanguageContext";
import styles from "./MessageCard.module.css";
export default function MessageCard({ isLoading, paragraphs }) {
  const { language } = useContext(LanguageContext);

  return (
    <div className={styles.profile}>
      <img
        className={styles.photo}
        src={`data/pig_${language}.png`}
        alt="avatar"
      />
      {isLoading ? (
        <div className={styles.loadingSpinner}></div>
      ) : (
        paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))
      )}
    </div>
  );
}
