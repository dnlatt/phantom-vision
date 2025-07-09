'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";

const images = [
  "/home/vr-headset/vr-headset-1.jpeg",
  "/home/vr-headset/vr-headset-2.jpeg",
  "/home/vr-headset/vr-headset-3.jpeg",
  "/home/vr-headset/vr-headset-4.jpeg",
  "/home/vr-headset/vr-headset-5.jpeg",
  "/home/vr-headset/vr-headset-6.jpeg",
  "/home/vr-headset/vr-headset-7.jpeg",
  "/home/vr-headset/vr-headset-8.jpeg",
  "/home/vr-headset/vr-headset-9.jpeg",
  "/home/vr-headset/vr-headset-10.jpeg",
  "/home/vr-headset/vr-headset-11.jpeg",
];

const useParallax = (value: any, outputRange: number[]) => {
  return useTransform(value, [0, 1], outputRange);
};

export default function AwesomeExperienceSection() {
  const awesomeSectionRef = useRef(null);
  const { scrollYProgress: awesomeProgress } = useScroll({
    target: awesomeSectionRef,
    offset: ["start end", "end start"],
  });
  const awesomeY = useParallax(awesomeProgress, [150, -150]);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
    ],
  };

  return (
    <motion.section
      ref={awesomeSectionRef}
      className="bg-gradient-to-b from-[#3A005F] to-[#1A0033]"
      id="awesome-exp"
      style={{ y: awesomeY }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 text-center">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          <h2 className="subTitleHeader leading-tight">
            Awesome experiences with virtual reality world
          </h2>
          
        </motion.div>
      </div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative mx-auto slick-item">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </motion.section>
  );
}
