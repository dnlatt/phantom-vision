'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedSparkle = ({
  size,
  top,
  left,
  delay,
}: {
  size: number;
  top: string;
  left: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, rotate: 0 }}
    animate={{ opacity: [0, 1, 0], rotate: 360 }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 6,
      delay,
      ease: "easeInOut",
    }}
    className="absolute text-white z-0"
    style={{ top, left }}
  >
    <Sparkles style={{ width: size, height: size }} className="opacity-70" />
  </motion.div>
);

export default function HeroSection() {
  const [sparkles, setSparkles] = useState<
    { size: number; top: string; left: string; delay: number }[]
  >([]);

  useEffect(() => {
    const count = 5;
    const result = Array.from({ length: count }).map(() => ({
      size: Math.floor(Math.random() * 24) + 16,
      top: `${Math.floor(Math.random() * 90)}%`,
      left: `${Math.floor(Math.random() * 90)}%`,
      delay: Math.random() * 2,
    }));
    setSparkles(result);
  }, []);

  // Hero-specific slower animations
  const heroFadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 5, ease: "easeOut" },
  };

  const heroStaggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <section
      className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left z-0 relative max-container"
      id="hero"
    >
      <motion.div
        className="md:w-1/2 mb-12 md:mb-0"
        variants={heroStaggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="titleHeader mb-6" variants={heroFadeInUp}>
          Let&apos;s Explore Three-Dimensional Visual
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
          variants={heroFadeInUp}
        >
          With virtual technology you can see the digital world feel more real
          and you can play the game with a new style.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12"
          variants={heroFadeInUp}
        >
          <Button className="cta-button h-13">Get It Now</Button>
          <Button className="cta-button h-13">Explore Device</Button>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          variants={heroFadeInUp}
        >
          <div className="flex -space-x-3 overflow-hidden">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-900"
              src="https://avatar.iran.liara.run/public/46"
              alt="Avatar"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-900"
              src="https://avatar.iran.liara.run/public/18"
              alt="Avatar"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-900"
              src="https://avatar.iran.liara.run/public/5"
              alt="Avatar"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-900"
              src="https://avatar.iran.liara.run/public/8"
              alt="Avatar"
            />
          </div>
          <p className="text-gray-300 text-lg">400k people online</p>
        </motion.div>
      </motion.div>

      {/* Image section with slower animation */}
      <motion.div
        className="md:w-1/2 flex justify-center relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {sparkles.map((s, index) => (
            <AnimatedSparkle key={index} {...s} />
          ))}
        </div>
        <div className="image-container-hero w-full items-center justify-center p-8">
          <Image
            width={500}
            height={400}
            src="/home/hero.png"
            alt="VR Headset User"
            className=""
          />
        </div>
      </motion.div>
    </section>
  );
}
