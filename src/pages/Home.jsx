import React, { useContext, useEffect, useState } from "react";
import Selector from "src/pages/Selector";
import LanguageSwitcher from "src/components/LanguageSwitcher";
import styles from "./Home.module.css";
import LanguageContext from "src/context/LanguageContext";
import ShareLink from "src/components/ShareLink";
import MessageCard from "./MessageCard";
import Description from "src/pages/description/Description";

import KakaoAdvertiseBottom from "src/components/Advertisement/KakaoAdvertiseBottom";
import KakaoAdvertise from "src/components/Advertisement/KakaoAdvertise";

export default function Home() {
  const { language } = useContext(LanguageContext);

  const [setting, setSetting] = useState({
    user: "",
    goal: "",
    food: "",
    tone: "",
    exercise: "",
    custom_tone: "",
  });

  const [user, setUser] = useState("돼돼");
  const [goal, setGoal] = useState("살빼기");
  const [food, setFood] = useState("피자");
  const [tone, setTone] = useState("츤데레");
  const [exercise, setExercise] = useState("걷기");
  const [customTone, setCustomTone] = useState("츤데레");

  const [responseFlag, setResponseFlage] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseFlage((p) => (p += 1));
    setSetting({ user, goal, food, tone, exercise, custom_tone: customTone });
  };

  const handleOnChageSetting = (e, name) => {
    switch (name) {
      case "user":
        setUser(e.target.value);
        break;
      case "goal":
        setGoal(e.target.value);
        break;
      case "food":
        setFood(e.target.value);
        break;
      case "tone":
        setTone(e.target.value);
        break;
      case "custom_tone":
        setCustomTone(e.target.value);
        break;
      case "exercise":
        setExercise(e.target.value);
        break;
      default:
        alert("어떤 값인지 파악이 되지 않습니다.");
    }
  };

  //GoogleAdvertise.js

  return (
    <>
      <LanguageSwitcher
        setTone={setTone}
        setUser={setUser}
        setFood={setFood}
        setGoal={setGoal}
        setExercise={setExercise}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === "ko" ? "돼지야~!" : "Diet Fact Violence"}
        </h1>
        <img src="/data/pig.png" className={styles.image} />
        <Description />
        <div className={styles.advertisement_shared}>
          {/* <div className="adfit" style={{ flex: "70%", width: "100%" }} /> */}

          <KakaoAdvertise />

          <ShareLink />
        </div>
        <Selector
          handleOnChageSetting={handleOnChageSetting}
          user={user}
          food={food}
          tone={tone}
          customTone={customTone}
          goal={goal}
          exercise={exercise}
          handleSubmit={handleSubmit}
        />

        {responseFlag > 0 && (
          <MessageCard responseFlag={responseFlag} setting={setting} />
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <KakaoAdvertiseBottom />
        </div>
      </div>
    </>
  );
}
