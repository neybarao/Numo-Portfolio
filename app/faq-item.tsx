"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq__item reveal${open ? " faq__item--open" : ""}`}>
      <button
        className="faq__question"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {question}
        <svg
          className="faq__chevron"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="faq__answer">
        <div className="faq__answer-inner">{answer}</div>
      </div>
    </div>
  );
}
