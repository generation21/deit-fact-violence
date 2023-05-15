import React, { useEffect, useState } from "react";

export default function LoadingComponent() {
  const loadingMessages = [
    "100kal 빼려면 달리기 운동으로 10분 가량의 운동이 필요합니다.",
    "100kal 빼려면 수영 운동으로 약 15-20분 가량의 운동이 필요합니다.",
    "100kal 빼려면 클라이밍 운동으로 대략 10분 가량의 운동이 필요합니다.",
    "100kal 빼려면 걷기 운동으로 대략 15분 가량의 운동이 필요합니다.",
  ];
  const [currentMessage, setCurrentMessage] = useState("");
  const [fullMessage, setFullMessage] = useState(
    "100kal 빼려면 걷기 운동으로 약 25~30분 가량의 운동이 필요합니다."
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
      setFullMessage(randomMessage);
      setCurrentMessage("");
    }, 5000); // 5초마다 새 메시지를 선택합니다.

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let messageIndex = 0;
    let message = "";
    const messageInterval = setInterval(() => {
      message += fullMessage[messageIndex];
      setCurrentMessage(message);
      messageIndex++;

      if (messageIndex >= fullMessage.length) {
        clearInterval(messageInterval);
      }
    }, 50); // 300ms마다 글자를 하나씩 추가합니다.

    return () => clearInterval(messageInterval);
  }, [fullMessage]);

  return (
    <>
      <div>약 1분 정도 걸립니다!</div>
      {currentMessage}
    </>
  );
}
