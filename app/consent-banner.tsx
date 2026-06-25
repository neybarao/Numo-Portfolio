"use client";

import { useEffect, useState } from "react";

function loadGoogleAnalytics() {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-PLLWTP0092";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", "G-PLLWTP0092");
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("numo-consent");
    if (consent === "accepted") {
      loadGoogleAnalytics();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("numo-consent", "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("numo-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="consent">
      <p className="consent__text">
        We use cookies to improve your experience.
      </p>
      <div className="consent__actions">
        <button className="consent__btn consent__btn--accept" onClick={handleAccept}>
          Accept
        </button>
        <button className="consent__btn consent__btn--decline" onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
}
