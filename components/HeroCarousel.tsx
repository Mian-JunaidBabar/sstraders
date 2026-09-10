"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface HeroCarouselSlide {
  photo: string;
  title: string;
  kicker: string;
}

const AUTOPLAY_MS = 3000;

export default function HeroCarousel({
  slides,
}: {
  slides: HeroCarouselSlide[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current || slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === index ? 1 : 0,
            transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Image
            src={slide.photo}
            alt={slide.title}
            fill
            priority={i === 0}
            sizes="(max-width: 768px) 0px, 45vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.85,
            }}
          />
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          background: "var(--color-accent)",
          color: "var(--color-accent-400)",
          padding: "4px 8px",
          font: "600 10px/1 'Barlow',sans-serif",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          zIndex: 10,
          border: "1px solid var(--color-accent-700)",
        }}
      >
        {slides[index].kicker}
      </div>

      <div
        style={{
          position: "absolute",
          left: "16px",
          bottom: "16px",
          zIndex: 10,
          background: "var(--color-accent)",
          color: "#fff",
          padding: "5px 10px",
          font: "700 12px/1 'Barlow Condensed',sans-serif",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          border: "1px solid var(--color-accent-700)",
        }}
      >
        {slides[index].title}
      </div>

      <div
        role="tablist"
        aria-label="Product category slides"
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          zIndex: 10,
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show ${slide.title}`}
            onClick={() => setIndex(i)}
            style={{
              width: "28px",
              height: "28px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: i === index ? "#fff" : "rgba(255,255,255,0.4)",
                transform: i === index ? "scale(1.3)" : "scale(1)",
                transition: "transform 0.3s ease, background 0.3s ease",
                display: "block",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
