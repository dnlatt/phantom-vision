'use client'

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1589882265634-84f7eb9a3414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80",
];

export default function ParallaxImages() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "100px 20px",
        background: "#111",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {images.map((src, i) => {
        // Adjust vertical position (parallax) based on scroll and image speed factor
        const speed = 0.5 + i * 0.2;
        const translateY = -(scrollY * speed) % 200; // loop effect for fun

        return (
          <img
            key={i}
            src={src}
            alt={`Image ${i + 1}`}
            draggable={false}
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              transform: `translateY(${translateY}px)`,
              transition: "transform 0.1s ease-out",
              userSelect: "none",
              flexShrink: 0,
            }}
          />
        );
      })}
    </div>
  );
}
