"use client";

import { useMemo, useState } from "react";

type Greeting = {
  phrase: string;
  context: string;
  highlight: string;
};

const greetings: Greeting[] = [
  {
    phrase: "ওই! কেমন আছো?",
    context: "বন্ধু কিংবা সহকর্মীর সাথে হালকা সম্ভাষণ।",
    highlight: "উষ্ণ স্বর"
  },
  {
    phrase: "ওই, শুনছো তো?",
    context: "স্কুলের লনে দাঁড়িয়ে বন্ধুদের ডাক।",
    highlight: "চোখে চোখ রাখো"
  },
  {
    phrase: "ওই! চল সীমাহীন গল্প করি",
    context: "রাতের বেলা বারান্দায় দাঁড়িয়ে আলাপ শুরু।",
    highlight: "স্বতঃস্ফূর্ত হাসি"
  },
  {
    phrase: "ওই, একটু সময় আছে?",
    context: "কাজের বিরতিতে দ্রুত জিজ্ঞাসা।",
    highlight: "মৃদু কণ্ঠ"
  }
];

export function GreetingCarousel() {
  const orderedGreetings = useMemo(() => greetings, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGreeting = orderedGreetings[activeIndex];

  return (
    <section className="carousel">
      <div className="carousel__header">
        <p className="carousel__eyebrow">ইন্টারঅ্যাকটিভ অভিবাদন</p>
        <h2>
          {activeGreeting.phrase.split(" ").map((word, index) => (
            <span key={`${word}-${index}`} className="carousel__word">
              {word}
            </span>
          ))}
        </h2>
      </div>
      <p className="carousel__context">{activeGreeting.context}</p>
      <div className="carousel__meta">
        <span className="carousel__chip">{activeGreeting.highlight}</span>
        <span className="carousel__counter">
          {activeIndex + 1}/{orderedGreetings.length}
        </span>
      </div>
      <div className="carousel__actions">
        <button
          type="button"
          className="carousel__button"
          onClick={() => setActiveIndex((index) => (index + 1) % orderedGreetings.length)}
        >
          আরও একটি &quot;ওই&quot; শুনি
        </button>
      </div>
    </section>
  );
}
