"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Testimonials() {
  const testimonialsSectionRef = useRef(null);
  const { scrollYProgress: testimonialsProgress } = useScroll({
    target: testimonialsSectionRef,
    offset: ["start end", "end start"],
  });
  const testimonialsY = useTransform(testimonialsProgress, [0, 1], [80, -80]);

  const testimonialsInView = useInView(testimonialsSectionRef, {
    once: true,
    margin: "0px 0px -150px 0px",
  });

  return (
    <motion.section
      ref={testimonialsSectionRef}
      id="testimonials"
      className="max-container mx-auto px-4 py-16 md:py-24 text-center rounded-2xl bg-[#1A0033]"
      style={{ y: testimonialsY }}
      initial={{ opacity: 0, y: 80 }}
      animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <motion.h2
        className="subTitleHeader text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        What our clients say
      </motion.h2>
      <motion.p
        className="text-lg text-white max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.0, delay: 0.4 }}
      >
        See what our customer say about us. It really matter for us. How good
        or bad we will make it for evulation to make this better.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate={testimonialsInView ? "animate" : "initial"}
      >
        {[{
          img: "https://avatar.iran.liara.run/public/12",
          alt: "Client Avatar 1",
          quote: '"The virtual reality experience provided was truly immersive and mind-blowing. Highly recommend!"',
          name: "Jane Doe",
          role: "VR Enthusiast",
        }, {
          img: "https://avatar.iran.liara.run/public/6",
          alt: "Client Avatar 2",
          quote: '"Seamless setup and incredible graphics. My gaming sessions have never been this real!"',
          name: "John Smith",
          role: "Gamer",
        }, {
          img: "https://avatar.iran.liara.run/public/59",
          alt: "Client Avatar 3",
          quote: '"Fantastic customer support and the devices truly opened up a new dimension of creativity for me."',
          name: "Emily White",
          role: "Digital Artist",
        }].map(({ img, alt, quote, name, role }, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center border-color-[#8B5CF6] border-1"
            variants={fadeInUp}
          >
            <img
              src={img}
              alt={alt}
              className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-white"
            />
            <p className="text-sm text-white mb-4 italic">{quote}</p>
            <h3 className="font-semibold text-lg text-white">{name}</h3>
            <p className="text-xs text-white">{role}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
