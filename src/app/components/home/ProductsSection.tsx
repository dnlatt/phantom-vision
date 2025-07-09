'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useParallax = (value: any, outputRange: number[]) => {
  return useTransform(value, [0, 1], outputRange);
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function ProductsSection() {
  const productsSectionRef = useRef(null);
  const { scrollYProgress: productsProgress } = useScroll({
    target: productsSectionRef,
    offset: ["start end", "end start"],
  });
  const productsY = useParallax(productsProgress, [100, -100]);

  return (
    <motion.section
      ref={productsSectionRef}
      className="max-container mx-auto"
      style={{ y: productsY }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      id="products"
    >
      <motion.h2
        className="subTitleHeader md:text-4xl font-bold mb-12 text-center md:text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        Mixed Reality Headsets
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      >
        {/* Card 1: Metaverse */}
        <motion.div
          className="mr-card-frame"
          style={{ backgroundImage: "url('/home/headset-1.png')" }}
          variants={fadeInUp}
        >
          <div className="overlay">
            <h3 className="text-2xl font-semibold mb-2">Metaverse</h3>
            <p className="text-sm text-gray-300">
              A Network of 3D virtual worlds focused on social connection.
            </p>
          </div>
        </motion.div>

        {/* Card 2: RIoT */}
        <motion.div
          className="mr-card-frame"
          style={{ backgroundImage: "url('/home/headset-2.png')" }}
          variants={fadeInUp}
        >
          <div className="overlay">
            <h3 className="text-2xl font-semibold mb-2">RIoT</h3>
            <p className="text-sm text-gray-300">
              AI and IoT are both emerging innovative technologies with a lot
              of potentials.
            </p>
          </div>
        </motion.div>

        {/* Card 3: HoloLens */}
        <motion.div
          className="mr-card-frame"
          style={{ backgroundImage: "url('/home/headset-3.png')" }}
          variants={fadeInUp}
        >
          <div className="overlay">
            <h3 className="text-2xl font-semibold mb-2">HoloLens</h3>
            <p className="text-sm text-gray-300">
              HoloLens display information, blend with the real world, or even
              simulate a virtual world.
            </p>
          </div>
        </motion.div>

        {/* Card 4: TPCCASTT */}
        <motion.div
          className="mr-card-frame"
          style={{ backgroundImage: "url('/home/headset-4.png')" }}
          variants={fadeInUp}
        >
          <div className="overlay">
            <h3 className="text-2xl font-semibold mb-2">TPCCASTT</h3>
            <p className="text-sm text-gray-300">
              Method is great to start students reading and infering with
              little assistance from the instructor
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
