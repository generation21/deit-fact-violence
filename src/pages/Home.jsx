import React, { useContext, useState } from "react";
import Selector from "src/pages/Selector";
import LanguageSwitcher from "src/components/LanguageSwitcher";
import styles from "./Home.module.css";
import LanguageContext from "src/context/LanguageContext";
import ShareLink from "src/components/ShareLink";
import MessageCard from "./MessageCard";

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
          {language === "ko" ? "다이어트 팩트 폭력" : "Diet Fact Violence"}
        </h1>
        <img
          src="/data/pig.png"
          className={styles.image}
          style={{
            borderRadius: "1rem",
            height: "50%",
            width: "50%",
            alignContent: "center",
            justifyContent: "center",
            marginLeft: "25%",
          }}
        />
        <div className={styles.advertisement_shared}>
          {/* <div style={{ flex: "70%" }}>
            <ins
              class="kakao_ad_area"
              style="display:none;"
              data-ad-unit="DAN-9YrKRY8s5Ph9KYsY"
              data-ad-width="728"
              data-ad-height="90"
            ></ins>
            <script
              type="text/javascript"
              src="//t1.daumcdn.net/kas/static/ba.min.js"
              async
            ></script>
          </div> */}
          <div style={{ flex: "30%" }}>
            <ShareLink />
          </div>
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

        <MessageCard responseFlag={responseFlag} setting={setting} />
      </div>
    </>
  );
}
