// src/components/LanguageSwitcher.js

import { useContext } from "react";
import LanguageContext from "src/context/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageSwitch = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ko" : "en"));
  };

  return (
    <button onClick={handleLanguageSwitch} className={styles.languageSwitcher}>
      {language === "ko" ? "English" : "한국어"}
    </button>
  );
};

export default LanguageSwitcher;
