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
      console.log("fetching");
      return fetch("http://localhost:8000/ChatDietBrutalHonesty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          goal: setting.goal,
          food: setting.food,
          tone: setting.tone !== "Custom" ? setting.tone : setting.custom_tone,
          user: setting.user,
          language: language,
          responseFlag: responseFlag,
        }),
      }).then((res) => res.json());
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
    }, 60);

    return () => clearInterval(typingAnimation);
  }, [result]);

  if (isLoading) return <div className={styles.loadingSpinner}></div>;
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

// import React, { useState } from "react";
// import { useEffect } from "react";
// import styles from "./ChatBot.module.css";
// import { GiMuscleUp } from "react-icons/gi";

// export default function ChatBot({ responseFlag, setting }) {
//   const [result, setResult] = useState("");
//   const [displayedResult, setDisplayedResult] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (responseFlag === 0) {
//       setResult("원하는 값을 넣어 버튼을 눌러주세요");
//     } else {
//       async function fetchData() {
//         setIsLoading(true);
//         const response = await fetch(
//           "http://localhost:8000/ChatDietBrutalHonesty",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               goal: setting.goal,
//               food: setting.food,
//               tone:
//                 setting.tone !== "Custom" ? setting.tone : setting.custom_tone,
//               user: setting.user,
//             }),
//           }
//         );
//         const data = await response.json();
//         setResult(data.message);

//         setIsLoading(false);
//       }

//       fetchData();
//     }
//   }, [responseFlag]);

//   useEffect(() => {
//     let index = 0;

//     // Clear the displayedResult when the result changes
//     let timeText = "";
//     const typingAnimation = setInterval(() => {
//       if (index < result.length) {
//         // setDisplayedResult((prev) => prev + result[index]);
//         timeText += result[index];
//         setDisplayedResult(timeText);

//         index += 1;
//       } else {
//         clearInterval(typingAnimation);
//       }
//     }, 60);

//     return () => clearInterval(typingAnimation);
//   }, [result]); // Remove 'responseFlag' from the dependency array

//   const paragraphs = splitMessageIntoParagraphs(displayedResult);

//   return (
//     <div className={styles.messagesContainer}>
//       <GiMuscleUp />{" "}
//       {isLoading ? (
//         <div className={styles.loadingSpinner}></div>
//       ) : (
//         paragraphs.map((paragraph, index) => (
//           <p key={index} className={styles.paragraph}>
//             {paragraph}
//           </p>
//         ))
//       )}
//     </div>
//     // </div>
//   );
// }

// function splitMessageIntoParagraphs(message) {
//   return message.split("\n").filter((paragraph) => paragraph.trim() !== "");
// }

{
  /* <div className={styles.chat}>
      <div className={styles.chatTitle}>
        <h1>Jesse Tino</h1>
        <h2>RE/MAX</h2>
        <figure className={styles.avatar}>
          <img src="http://askavenue.com/img/17.jpg" />
        </figure>
      </div>
      <div className={styles.messages}>
        <div className={styles.messagesContent}></div>
      </div>
      <div className={styles.messageBox}>
        <textarea
          type="text"
          className={styles.messageInput}
          placeholder="Type message..."
        ></textarea>
        <button type="submit" className={styles.messageSubmit}>
          Send
        </button>
      </div>
      </div> */
}
// import React, { useState } from "react";
// import styles from "./ChatBot.module.css";

// const ChatBot = ({ setting }) => {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (inputMessage.trim() === "") return;
//     setMessages([...messages, { text: inputMessage, sender: "user" }]);
//     setInputMessage("");
//     console.log(inputMessage);
//     setIsLoading(true);
//     const response = await fetch(
//       "http://localhost:8000/ChatDietBrutalHonesty",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           target: "남자친구 만나기",
//           food: "피자",
//           parlance: 0,
//           prev_message: [],
//           new_message: inputMessage,
//         }),
//       }
//     );
//     const data = await response.json();
//     setIsLoading(false);
//     setMessages((messages) => [
//       ...messages,
//       { text: data.message, sender: "bot" },
//     ]);
//   };

//   return (
//     <div className={styles.chatbotContainer}>
//       <div className={styles.messagesContainer}>
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`message ${
//               message.sender === "bot" ? "bot-message" : "user-message"
//             }`}
//           >
//             {message.text}
//           </div>
//         ))}
//         {isLoading && <div className="loading-spinner"></div>}
//       </div>
//       <form className={styles.inputForm} onSubmit={sendMessage}>
//         <input
//           type="text"
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//           placeholder="메시지를 입력하세요..."
//         />
//         <button type="submit">전송</button>
//       </form>
//     </div>
//   );
// };
// export default ChatBot;
