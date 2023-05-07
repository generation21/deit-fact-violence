import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Selector from "src/components/Selector";
import ChatBot from "src/components/ChatBot";
import LanguageSwitcher from "src/components/LanguageSwitcher";
import styles from "./Home.module.css";

export default function Home() {
  const [setting, setSetting] = useState({
    user: "",
    goal: "",
    food: "",
    tone: "",
    custom_tone: "",
  });

  const [user, setUser] = useState("Chatbot");
  const [goal, setGoal] = useState("다이어트");
  const [food, setFood] = useState("피자");
  const [tone, setTone] = useState("츤데레");
  const [customTone, setCustomTone] = useState("츤데레");

  const [responseFlag, setResponseFlage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseFlage((p) => (p += 1));
    setSetting({ user, goal, food, tone, custom_tone: customTone });
    // navigate("/chatbot");
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
      default:
        alert("어떤 값인지 파악이 되지 않습니다.");
    }
  };

  return (
    <>
      <LanguageSwitcher />
      <div className={styles.container}>
        <Selector
          handleOnChageSetting={handleOnChageSetting}
          user={user}
          food={food}
          tone={tone}
          customTone={customTone}
          goal={goal}
          handleSubmit={handleSubmit}
        />

        <ChatBot
          key={responseFlag}
          responseFlag={responseFlag}
          setting={setting}
        />
      </div>
    </>
  );
}
