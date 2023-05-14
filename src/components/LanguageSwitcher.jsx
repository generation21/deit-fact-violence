// src/components/LanguageSwitcher.js

import { useContext } from "react";
import LanguageContext from "src/context/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = ({
  setTone,
  setUser,
  setFood,
  setGoal,
  setExercise,
}) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageSwitch = (e) => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ko" : "en"));
    language === "en" ? setTone("츤데레 말투") : setTone("softie inside tone");
    language === "en" ? setUser("사용자") : setUser("user");
    language === "en" ? setFood("피자") : setFood("Pizza");
    language === "en" ? setGoal("다이어트") : setGoal("diet");
    language === "en" ? setExercise("걷기") : setGoal("walking");
  };

  return (
    <button onClick={handleLanguageSwitch} className={styles.languageSwitcher}>
      {language === "ko" ? "English" : "한국어"}
    </button>
  );
};

export default LanguageSwitcher;
