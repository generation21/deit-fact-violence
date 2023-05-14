import styles from "./Selector.module.css";
import { GiMuscleFat } from "react-icons/gi";
import React, { useContext } from "react";
import LanguageContext from "src/context/LanguageContext";
import Tone from "src/pages/Selectors/Tone";
import UserInfor from "src/pages/Selectors/UserInfor";

export default function Selector({
  handleOnChageSetting,
  user,
  food,
  tone,
  customTone,
  goal,
  exercise,
  handleSubmit,
}) {
  const { language } = useContext(LanguageContext);

  return (
    <form onSubmit={handleSubmit}>
      <UserInfor
        user={user}
        food={food}
        goal={goal}
        exercise={exercise}
        handleOnChageSetting={handleOnChageSetting}
      />
      <button type="submit" className={styles.submitButton}>
        {language === "ko" ? "팩폭 당하기" : "Fact Violence"} <GiMuscleFat />
      </button>
    </form>
  );
}
