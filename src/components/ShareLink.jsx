import React, { useEffect } from "react";
import { shareKakao } from "src/components/ShareLinkPlatFrom/Kakao";
import styles from "./ShareLink.module.css";
export default function ShareLink() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const route = "https://deit-fact-violence.pages.dev";
  const title = "kakao";

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => shareKakao(route, title)}
      >
        <img
          style={{ width: "3rem", height: "3rem" }}
          className="w-12 h-12"
          src={"data/kakaotalk_sharing_btn_medium.png"}
          alt={"Kakao Logo"}
        />
      </button>
    </div>
  );
}
