import React, { useContext } from "react";
import LanguageContext from "src/context/LanguageContext";
import LoadingComponent from "src/components/LoadingComponent";
import styles from "./MessageCard.module.css";
import OpenAI from "src/router/OpenAI";
import Error from "src/pages/Error";

export default function MessageCard({ responseFlag, setting }) {
  const [isLoading, error, paragraphs] = OpenAI(responseFlag, setting);
  console.log(paragraphs);
  const { language } = useContext(LanguageContext);
  console.log(isLoading, error, paragraphs);
  if (error)
    return (
      <div className={styles.profile}>
        <img
          className={styles.photo}
          src={`data/pig_${language}.png`}
          alt="avatar"
        />
        <Error />
      </div>
    );
  return (
    <div className={styles.profile}>
      <img
        className={styles.photo}
        src={`data/pig_${language}.png`}
        alt="avatar"
      />
      {isLoading ? (
        <>
          <div className={styles.loadingSpinner}></div>
          <LoadingComponent />
        </>
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
