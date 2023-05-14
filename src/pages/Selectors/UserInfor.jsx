import React, { useContext } from "react";
import LanguageContext from "src/context/LanguageContext";
import styles from "./UserInfor.module.css";
export default function UserInfor({
  handleOnChageSetting,
  user,
  food,
  goal,
  exercise,
}) {
  const { language } = useContext(LanguageContext);

  return (
    <div className={styles.formGroup}>
      <div className={styles.label}>
        {language === "ko" ? "내 이름은" : "My name is"}
        <input
          type="text"
          id="username"
          className={styles.input}
          value={user}
          onChange={(e) => handleOnChageSetting(e, "user")}
        />
      </div>

      <div className={styles.label}>
        {language === "ko" ? "나의 다이어트 목표는" : "my diet goal is"}

        <input
          type="text"
          id="goal"
          className={styles.input}
          value={goal}
          onChange={(e) => handleOnChageSetting(e, "goal")}
        />
      </div>
      <div className={styles.label}>
        {language === "ko"
          ? "지금 먹고싶은 음식은"
          : "The food I want to eat right now is"}

        <input
          type="text"
          id="food"
          className={styles.input}
          value={food}
          onChange={(e) => handleOnChageSetting(e, "food")}
        />
      </div>
      <div className={styles.label}>
        {language === "ko"
          ? "이 칼로리를 태울 운동은 "
          : "The exercise that will burn these calories is"}

        <input
          type="text"
          id="exercise"
          className={styles.input}
          value={exercise}
          onChange={(e) => handleOnChageSetting(e, "exercise")}
        />
      </div>
    </div>
  );
}
