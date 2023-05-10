import React, { useContext, useState } from "react";
import { useEffect } from "react";
import styles from "./ChatBot.module.css";

import MessageCard from "./MessageCard";
import LanguageContext from "src/context/LanguageContext";
import { useQuery } from "@tanstack/react-query";
import Error from "src/pages/Error";

export default function ChatBot({ responseFlag, setting }) {
  const [result, setResult] = useState("");
  const [displayedResult, setDisplayedResult] = useState("");

  const { language } = useContext(LanguageContext);

  const {
    isLoading,
    error,
    data: openAIData,
  } = useQuery(
    ["openai", setting],
    async () => {
      return fetch(
        "https://mowe6sedlramx2zmolwusterzq0jklxy.lambda-url.ap-northeast-2.on.aws/ChatDietBrutalHonesty",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            goal: setting.goal,
            food: setting.food,
            tone:
              setting.tone !== "Custom" ? setting.tone : setting.custom_tone,
            user: setting.user,
            language: language,
            responseFlag: responseFlag,
          }),
        }
      ).then((res) => res.json());
    },
    {
      staleTime: 1000 * 60 * 100,
      retry: 6,
    }
  );

  useEffect(() => {
    if (openAIData && openAIData.message) {
      setResult(openAIData.message);
    }
  }, [openAIData]);

  useEffect(() => {
    let index = 0;

    // Clear the displayedResult when the result changes
    let timeText = "";
    const typingAnimation = setInterval(() => {
      if (index < result.length) {
        timeText += result[index];
        setDisplayedResult(timeText);

        index += 1;
      } else {
        clearInterval(typingAnimation);
      }
    }, 55);

    return () => clearInterval(typingAnimation);
  }, [result]);

  if (isLoading) return <MessageCard isLoading={isLoading} />;
  if (error) return <Error />;

  const paragraphs = splitMessageIntoParagraphs(displayedResult);

  return (
    // <div className={styles.messagesContainer}>
    <MessageCard isLoading={isLoading} paragraphs={paragraphs} />
    // </div>
  );
}

function splitMessageIntoParagraphs(message) {
  return message.split("\n").filter((paragraph) => paragraph.trim() !== "");
}
