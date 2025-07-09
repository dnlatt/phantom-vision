"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactUs() {
  const contactSectionRef = useRef(null);
  const { scrollYProgress: contactProgress } = useScroll({
    target: contactSectionRef,
    offset: ["start end", "end start"],
  });
  const contactY = useTransform(contactProgress, [0, 1], [60, -60]);

  const contactInView = useInView(contactSectionRef, {
    once: true,
    threshold: 0,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.section
      ref={contactSectionRef}
      id="contact-us"
      className="max-container mx-auto px-4 py-16 md:py-12 text-center md:text-left"
      style={{ y: contactY }}
      initial={{ opacity: 0, y: 80 }}
      animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <motion.div
        className="rounded-2xl flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={contactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.0, delay: 0.3 }}
      >
        <div className="md:w-1/2 gap-8 p-8 md:p-12">
          <h2 className="subTitleHeader text-3xl md:text-4xl font-bold mb-4">
            Explore product in new way
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            We specialize in creating visual identities for products and brands in your company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <input
              type="email"
              placeholder="Your email here"
              className="p-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white flex-grow max-w-sm"
            />
            <button className="bg-white text-[#8B5CF6] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Start
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/home/explore-product.png"
            alt="Explore Product Visual"
            className="w-full max-w-xs md:max-w-full h-auto object-contain rounded-xl"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
