'use client'
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const useParallax = (value: any, outputRange: number[]) => {
  return useTransform(value, [0, 1], outputRange);
};

export default function ExperienceSection() {
  const expSectionRef = useRef(null);
  const { scrollYProgress: expProgress } = useScroll({
    target: expSectionRef,
    offset: ["start end", "end start"],
  });
  const expImageY = useParallax(expProgress, [100, -100]);
  const expTextY = useParallax(expProgress, [50, -50]);

  const fadeInLeft = {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      ref={expSectionRef}
      className="max-container mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20"
      id="experiencegame"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <motion.div
        className="lg:w-1/2 flex flex-col sm:flex-row justify-center gap-8"
        style={{ y: expImageY }}
        variants={fadeInLeft}
        transition={{ duration: 1.0, delay: 0.3 }}
      >
        <div>
          <Image
            width={416}
            height={556}
            src="/home/exp-game-2.png"
            alt="VR Headset User"
            className=""
          />
        </div>
        <div className="p-2 mt-0 sm:mt-16">
          <Image
            width={416}
            height={556}
            src="/home/exp-game-1.png"
            alt="VR Headset User"
            className=""
          />
        </div>
      </motion.div>

      <motion.div
        className="lg:w-1/2 text-center lg:text-left lg:mt-12"
        style={{ y: expTextY }}
        variants={fadeInRight}
        transition={{ duration: 1.0, delay: 0.5 }}
      >
        <h2 className="subTitleHeader md:pt-20">New Experience In Playing Game</h2>
        <p className="md:text-lg text-gray-300 mt-8 mb-8 mx-auto lg:mx-0">
          You can try playing the game with a new style and of course a more
          real feel, like you are the main character in your game and
          adventure in this new digital world.
        </p>
        <Button className="cta-button h-12">
          Get It Now
        </Button>
      </motion.div>
    </motion.section>
  );
}
