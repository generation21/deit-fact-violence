import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { AiOutlineLink } from "react-icons/ai";
import styles from "./images.module.css";

const portalRoot = document.getElementById("portal-root");

export default function LinkCopy() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowTooltip(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 2000); // 2 seconds

      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  return (
    <div>
      <button onClick={copyLink}>
        <AiOutlineLink className={styles.image} />
      </button>
      {showTooltip && ReactDOM.createPortal(<Tooltip />, portalRoot)}
    </div>
  );
}

function Tooltip() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "black",
        color: "white",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      Copied to this link
    </div>
  );
}
