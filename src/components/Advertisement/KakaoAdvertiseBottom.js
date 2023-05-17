import React, { useEffect, useRef } from "react";

export default function KakaoAdvertiseBottom() {
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

    ins.setAttribute("data-ad-width", "300");
    ins.setAttribute("data-ad-height", "250");
    ins.setAttribute("data-ad-unit", "DAN-FMwaJcAaBQSZWjS4");

    document.querySelector(".adfit_bottom").appendChild(ins);
    document.querySelector(".adfit_bottom").appendChild(scr);

    adRef.current = true;
  }, []);
  return <div className="adfit_bottom"></div>;
}
