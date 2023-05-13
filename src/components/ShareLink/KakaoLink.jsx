import { HOMEPAGEURL } from "src";
import React, { useEffect } from "react";
import styles from "./images.module.css";

export default function KakaoLink() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const title = "kakao";

  return (
    <button onClick={() => shareKakao(title)}>
      <img
        className={styles.image}
        src={"data/kakaotalk_sharing_btn_medium.png"}
        alt={"Kakao Logo"}
      />
    </button>
  );
}

const shareKakao = (title) => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Link.sendDefault({
      objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: title, // 인자값으로 받은 title
        description: "설명", // 인자값으로 받은 title
        imageUrl: "/data/main2.png",
        link: {
          mobileWebUrl: HOMEPAGEURL, // 인자값으로 받은 route(uri 형태)
          webUrl: HOMEPAGEURL,
        },
      },
      buttons: [
        {
          title: "title",
          link: {
            mobileWebUrl: HOMEPAGEURL,
            webUrl: HOMEPAGEURL,
          },
        },
      ],
    });
  }
};
