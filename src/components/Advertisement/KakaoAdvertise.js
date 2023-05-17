import React, { useEffect, useRef } from "react";

export default function KakaoAdvertise() {
  const adRef = useRef(false);
  useEffect(() => {
    if (adRef.current) {
      return;
    }
    const ins = document.createElement("ins");
    const scr = document.createElement("script");

    ins.className = "kakao_ad_area";
    ins.style = "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    const winodwSize = window.innerWidth;

    if (winodwSize < 1024) {
      ins.setAttribute("data-ad-width", "320");
      ins.setAttribute("data-ad-height", "100");
      ins.setAttribute("data-ad-unit", "DAN-k1cjuOCKDWj6KUxt");
    } else {
      ins.setAttribute("data-ad-width", "728");
      ins.setAttribute("data-ad-height", "90");
      ins.setAttribute("data-ad-unit", "DAN-U2U7XxoLMLiZvlYM");
    }

    document.querySelector(".adfit").appendChild(ins);
    document.querySelector(".adfit").appendChild(scr);

    adRef.current = true;
  }, []);
  return <div className="adfit"></div>;
}
