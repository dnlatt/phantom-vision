'use client';

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1556856425-366d6618905d",
  "https://images.unsplash.com/photo-1520271348391-049dd132bb7c",
  "https://images.unsplash.com/photo-1609166214994-502d326bafee",
  "https://images.unsplash.com/photo-1589882265634-84f7eb9a3414",
  "https://images.unsplash.com/photo-1514689832698-319d3bcac5d5",
  "https://images.unsplash.com/photo-1535207010348-71e47296838a",
  "https://images.unsplash.com/photo-1588007375246-3ee823ef4851",
  "https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4",
];

export default function ParallaxImageTicker() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const [velocity, setVelocity] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const update = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScrollY;
      setVelocity(delta);
      setLastScrollY(currentScroll);
    };

    const interval = setInterval(update, 50);
    return () => clearInterval(interval);
  }, [lastScrollY]);

  const rawSkew = Math.max(-20, Math.min(20, velocity * -0.5));
  const smoothSkew = useSpring(rawSkew, { stiffness: 120, damping: 20 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden py-20"
    >
      <motion.div
        className="flex flex-col gap-12 items-center"
        style={{ skewY: smoothSkew }}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={`${src}?auto=format&fit=crop&w=600&q=60`}
            alt={`Image ${index}`}
            className="rounded-lg shadow-xl w-[300px] h-[400px] object-cover"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
          />
        ))}
      </motion.div>
    </section>
  );
}
