"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1200);
    const hideTimer = setTimeout(() => setHidden(true), 1700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`loading-screen${fading ? " loading-screen--hidden" : ""}`}>
      <svg
        className="loading-screen__mark"
        viewBox="0 0 200 200"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 0C133.581 0 150.371 -3.14713e-05 163.363 6.14453C176.748 12.4752 187.525 23.2516 193.855 36.6367C200 49.6285 200 66.4191 200 100C200 133.581 200 150.371 193.855 163.363C187.525 176.748 176.748 187.525 163.363 193.855C150.371 200 133.581 200 100 200C66.4191 200 49.6285 200 36.6367 193.855C23.2516 187.525 12.4752 176.748 6.14453 163.363C-3.14713e-05 150.371 0 133.581 0 100C0 66.4191 -3.14713e-05 49.6285 6.14453 36.6367C12.4752 23.2516 23.2516 12.4752 36.6367 6.14453C49.6285 -3.14713e-05 66.4191 0 100 0ZM64 40C50.7452 40 40 50.7452 40 64V136C40 149.255 50.7452 160 64 160H136C149.255 160 160 149.255 160 136V64C160 50.7452 149.255 40 136 40H64Z"
        />
      </svg>
    </div>
  );
}
