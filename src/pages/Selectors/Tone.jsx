import React, { useContext, useState } from "react";
import styles from "./Tone.module.css";
import LanguageContext from "src/context/LanguageContext";

export default function Tone({ tone, customTone, handleOnChageSetting }) {
  const { language } = useContext(LanguageContext);
  const [showCustomTone, setShowCustomTone] = useState(false);
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
          <label className={styles.customToneLabel}>
            {language === "ko" ? "사용자 지정 말투" : "custom tone"}
          </label>
          <input
            type="text"
            id="customTone"
            className={styles.customToneInput}
            value={customTone}
            onChange={(e) => handleOnChageSetting(e, "custom_tone")}
          />
        </div>
      )}
    </div>
  );
}
