import React, { useEffect, useState, useContext } from "react";
import styles from "./Selector.module.css";
import { GiMuscleFat } from "react-icons/gi";

import LanguageContext from "src/context/LanguageContext";
import ShareLink from "./ShareLink";

export default function Selector({
  handleOnChageSetting,
  user,
  food,
  tone,
  customTone,
  goal,
  handleSubmit,
}) {
  const [showCustomTone, setShowCustomTone] = useState(false);

  const { language } = useContext(LanguageContext);

  const toneList =
    language === "ko"
      ? ["츤데레 말투", "존엄한 박사 말투", "까칠한 말투", "Custom"]
      : [
          "softie inside tone",
          "The dignified doctor's tone",
          "The harsh tone",
          "Custom",
        ];

  return (
    // <div className={styles.settingsContainer}>
    <form onSubmit={handleSubmit}>
      <div className={styles.tone}>
        <label htmlFor="tone" className={styles.toneLabel}>
          {language === "ko" ? "말투 선택" : "Choose a Tone"}
        </label>

        <select
          id="tone"
          value={tone}
          className={styles.toneSelect}
          onChange={(e) => {
            handleOnChageSetting(e, "tone");
            if (e.target.value === "Custom") {
              setShowCustomTone(true);
            } else {
              setShowCustomTone(false);
            }
          }}
        >
          {toneList.map((tone) => (
            <option value={tone}>{tone}</option>
          ))}
        </select>
        {showCustomTone && (
          <div className={styles.customToneForm}>
            <label htmlFor="customTone" className={styles.label}>
              {language === "ko" ? "사용자 지정 말투" : "custom tone"}
            </label>
            <input
              type="text"
              id="customTone"
              className={styles.input}
              value={customTone}
              onChange={(e) => handleOnChageSetting(e, "custom_tone")}
            />
          </div>
        )}
      </div>
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
      </div>

      <button type="submit" className={styles.submitButton}>
        {language === "ko" ? "팩폭 당하기" : "Fact Violence"} <GiMuscleFat />
      </button>
    </form>
    // </div>
  );
}
