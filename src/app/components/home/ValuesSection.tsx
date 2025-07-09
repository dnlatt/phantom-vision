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

export default function CompanyValues() {
  const valuesSectionRef = useRef(null);
  const { scrollYProgress: valuesProgress } = useScroll({
    target: valuesSectionRef,
    offset: ["start end", "end start"],
  });
  const valuesY = useTransform(valuesProgress, [0, 1], [120, -120]);

  const valuesInView = useInView(valuesSectionRef, {
    once: true,
    margin: "0px 0px -150px 0px",
  });

  return (
    <motion.section
      ref={valuesSectionRef}
      id="companyvalues"
      className="max-container mx-auto px-4 py-10 md:py-12 text-center"
      style={{ y: valuesY }}
      initial={{ opacity: 0, y: 80 }}
      animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <motion.h2
        className="subTitleHeader text-3xl md:text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        Our company values culture
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate={valuesInView ? "animate" : "initial"}
      >
        {[{
          icon: "💡",
          title: "Innovation",
          desc: "Constantly pushing boundaries and exploring new frontiers in VR technology.",
          color: "#8B5CF6",
        }, {
          icon: "🤝",
          title: "Collaboration",
          desc: "Working together to achieve shared goals and foster a supportive environment.",
          color: "#EC4899",
        }, {
          icon: "🌱",
          title: "Growth",
          desc: "Committed to personal and professional development for all team members.",
          color: "#8B5CF6",
        }, {
          icon: "🎯",
          title: "Customer First",
          desc: "Prioritizing user experience and satisfaction in every product we build.",
          color: "#EC4899",
        }].map(({ icon, title, desc, color }, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            style={{ backgroundColor: "#280040" }}
            variants={fadeInUp}
          >
            <div className={`text-[${color}] text-5xl mb-4`} style={{ color }}>
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
