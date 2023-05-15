import React, { useEffect } from "react";

export const GoogleAdvertise = ({
  className = "adsbygoogle",
  client = "ca-pub-8585383412912372",
  slot = "8531176579",
  format = "fluid",
  responsive = "true",
  layoutKey = "-73+ed+2i-1n-4w",
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log("Advertise is pushed");
    } catch (e) {
      if (process.env.NODE_ENV !== "production")
        console.error("AdvertiseError", e);
    }
  }, []);
  //   if (process.env.NODE_ENV !== "production")
  //     return (
  //       <div
  //         style={{
  //           background: "#e9e9e9",
  //           color: "black",
  //           fontSize: "18px",
  //           fontWeight: "bold",
  //           textAlign: "center",
  //           padding: "16px",
  //         }}
  //       >
  //         광고 표시 영역
  //       </div>
  //     );

  return (
    <ins
      className={className}
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        display: "block",
        textAlign: "center",
      }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
      data-ad-layout-key={layoutKey}
    />
  );
};
