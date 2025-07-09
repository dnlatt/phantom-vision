'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Custom hook for parallax effect (keeping for other sections)
const useParallax = (value, outputRange) => {
  return useTransform(value, [0, 1], outputRange);
};

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

export default function AboutUS() {
    // Experience section parallax
    const expRef = useRef(null);
    const { scrollYProgress: expProgress } = useScroll({
      target: expRef,
      offset: ["start end", "end start"]
    });
    const expImageY = useParallax(expProgress, [100, -100]);
    const expTextY = useParallax(expProgress, [50, -50]);

    // Awesome experience section parallax
    const awesomeRef = useRef(null);
    const { scrollYProgress: awesomeProgress } = useScroll({
      target: awesomeRef,
      offset: ["start end", "end start"]
    });
    const awesomeY = useParallax(awesomeProgress, [150, -150]);

    // Products section parallax
    const productsRef = useRef(null);
    const { scrollYProgress: productsProgress } = useScroll({
      target: productsRef,
      offset: ["start end", "end start"]
    });
    const productsY = useParallax(productsProgress, [100, -100]);

    // Testimonials section parallax
    const testimonialsRef = useRef(null);
    const { scrollYProgress: testimonialsProgress } = useScroll({
      target: testimonialsRef,
      offset: ["start end", "end start"]
    });
    const testimonialsY = useParallax(testimonialsProgress, [80, -80]);

    // Values section parallax
    const valuesRef = useRef(null);
    const { scrollYProgress: valuesProgress } = useScroll({
      target: valuesRef,
      offset: ["start end", "end start"]
    });
    const valuesY = useParallax(valuesProgress, [120, -120]);

    // Contact section parallax
    const contactRef = useRef(null);
    const { scrollYProgress: contactProgress } = useScroll({
      target: contactRef,
      offset: ["start end", "end start"]
    });
    const contactY = useParallax(contactProgress, [60, -60]);

    // Refs for scroll-triggered animations
    const expSectionRef = useRef(null);
    const awesomeSectionRef = useRef(null);
    const productsSectionRef = useRef(null);
    const testimonialsSectionRef = useRef(null);
    const valuesSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    // InView hooks for scroll animations - Updated with better timing
    const expInView = useInView(expSectionRef, { 
      once: true, 
      threshold: 0,
      margin: "0px 0px -200px 0px" // Start animating 200px before the element comes into view
    });
    const awesomeInView = useInView(awesomeSectionRef, { 
      once: true, 
      threshold: 0,
      margin: "0px 0px -150px 0px"
    });
    const productsInView = useInView(productsSectionRef, { 
      once: true, 
      threshold: 0,
      margin: "0px 0px -200px 0px"
    });
    const testimonialsInView = useInView(testimonialsSectionRef, { 
      once: true, 
      threshold: 0,
      margin: "0px 0px -150px 0px"
    });
    const valuesInView = useInView(valuesSectionRef, { 
      once: true, 
      threshold: 0,
      margin: "0px 0px -150px 0px"
    });
    const contactInView = useInView(contactSectionRef, { 
      once: true, 
      threshold: 0,
      margin: "0px 0px -100px 0px"
    });

    const [sparkles, setSparkles] = useState<
    { size: number; top: string; left: string; delay: number }[]
  >([]);

  // Safe sparkle generation (client only)
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

  // Animation variants - Updated with slower, more elegant timing
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" } // Increased from 0.6s to 1.2s
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3 // Increased from 0.2s to 0.3s
      }
    }
  };

  // Hero-specific slower animations
  const heroFadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 3, ease: "easeOut" } // Much slower for hero
  };

  const heroStaggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.4 // Slower stagger for hero
      }
    }
  };

  return (
    <main>
      {/* Hero Section with Slower Sequential Animations */}
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
          <motion.h1 
            className="titleHeader mb-6"
            variants={heroFadeInUp}
          >
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
          <motion.div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"  variants={heroFadeInUp}>
          
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
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} // Much slower
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

      {/* Experience Section with Improved Scroll Animation */}
      <motion.section
        ref={expSectionRef}
        className="max-container mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20"
        id="experiencegame"
        initial={{ opacity: 0, y: 80 }}
        animate={expInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <motion.div 
          className="lg:w-1/2 flex flex-col sm:flex-row justify-center gap-8" 
          style={{ y: expImageY }}
          initial={{ opacity: 0, x: -80 }}
          animate={expInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          <div className="">
            <Image
              width={416}
              height={556}
              src="/home/exp-game-2.png"
              alt="VR Headset User"
              className=""
            />
          </div>
          <div className=" p-2 mt-0 sm:mt-16">
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
          initial={{ opacity: 0, x: 80 }}
          animate={expInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          <h2 className="subTitleHeader md:pt-20">
            New Experience In Playing Game
          </h2>
          <p className="md:text-lg text-gray-300 mt-8 mb-8 mx-auto lg:mx-0">
            You can try playing the game with a new style and of course a more
            real feel, like you are the main character in your game and
            adventure in this new digital world.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Get It Now
          </button>
        </motion.div>
      </motion.section>

      {/* Awesome Experience Section with Improved Scroll Animation */}
      <motion.section 
        ref={awesomeSectionRef}
        className="bg-gradient-to-b from-[#3A005F] to-[#1A0033]" 
        id="awesome-exp"
        style={{ y: awesomeY }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={awesomeInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-8"
            initial={{ opacity: 0, y: 60 }}
            animate={awesomeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.0, delay: 0.3 }}
          >
            <h2 className="subTitleHeader leading-tight">
              Awesome experiences with virtual reality world
            </h2>
            <div className="awesome-exp-frame-outer md:ml-8 w-40 h-28 flex items-center justify-center">
              <div className="awesome-exp-frame-inner p-2 flex items-center justify-center">
                <Image
                  width={235}
                  height={156}
                  src="/home/vr-product.png"
                  alt="VR Headset User"
                  className=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section with Improved Scroll Animation */}
      <motion.section 
        ref={productsSectionRef}
        className="max-w-7xl mx-auto px-4 py-16 md:py-24"
        style={{ y: productsY }}
        initial={{ opacity: 0, y: 80 }}
        animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <motion.h2 
          className="subTitleHeader md:text-4xl font-bold mb-12 text-center md:text-left" 
          id="products"
          initial={{ opacity: 0, y: 50 }}
          animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          Mixed Reality Headsets
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={productsInView ? "animate" : "initial"}
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

      {/* Testimonials Section with Improved Scroll Animation */}
      <motion.section
        ref={testimonialsSectionRef}
        className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center rounded-2xl bg-[##1A0033]" 
        id="testimonials"
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
          {/* Testimonial Card 1 */}
          <motion.div
            className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center border-color-[#8B5CF6] border-1"
            variants={fadeInUp}
          >
            <img
              src="https://avatar.iran.liara.run/public/12"
              alt="Client Avatar 1"
              className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-white"
            />
            <p className="text-sm text-white mb-4 italic">
              "The virtual reality experience provided was truly immersive and
              mind-blowing. Highly recommend!"
            </p>
            <h3 className="font-semibold text-lg text-white">Jane Doe</h3>
            <p className="text-xs text-white">VR Enthusiast</p>
          </motion.div>
          {/* Testimonial Card 2 */}
          <motion.div 
            className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center border-color-[#8B5CF6] border-1"
            variants={fadeInUp}
          >
            <img
              src="https://avatar.iran.liara.run/public/6"
              alt="Client Avatar 2"
              className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-white"
            />
            <p className="text-sm text-white mb-4 italic">
              "Seamless setup and incredible graphics. My gaming sessions have
              never been this real!"
            </p>
            <h3 className="font-semibold text-lg text-white">John Smith</h3>
            <p className="text-xs text-white">Gamer</p>
          </motion.div>
          {/* Testimonial Card 3 */}
          <motion.div 
            className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center border-color-[#8B5CF6] border-1"
            variants={fadeInUp}
          >
            <img
              src="https://avatar.iran.liara.run/public/59"
              alt="Client Avatar 3"
              className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-white"
            />
            <p className="text-sm text-white mb-4 italic">
              "Fantastic customer support and the devices truly opened up a new
              dimension of creativity for me."
            </p>
            <h3 className="font-semibold text-lg text-white">Emily White</h3>
            <p className="text-xs text-white">Digital Artist</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Values Section with Improved Scroll Animation */}
      <motion.section 
        ref={valuesSectionRef}
        className="max-w-7xl mx-auto px-4 py-10 md:py-12 text-center" 
        id="companyvalues"
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
          {/* Value Card 1 */}
          <motion.div
            className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            style={{
              backgroundColor:
                "#280040" /* Darker purple for card background */,
            }}
            variants={fadeInUp}
          >
            <div className="text-[#8B5CF6] text-5xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-gray-400">
              Constantly pushing boundaries and exploring new frontiers in VR
              technology.
            </p>
          </motion.div>
          {/* Value Card 2 */}
          <motion.div
            className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            style={{
              backgroundColor:
                "#280040" /* Darker purple for card background */,
            }}
            variants={fadeInUp}
          >
            <div className="text-[#EC4899] text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-sm text-gray-400">
              Working together to achieve shared goals and foster a supportive
              environment.
            </p>
          </motion.div>
          {/* Value Card 3 */}
          <motion.div
            className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            style={{
              backgroundColor:
                "#280040" /* Darker purple for card background */,
            }}
            variants={fadeInUp}
          >
            <div className="text-[#8B5CF6] text-5xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p className="text-sm text-gray-400">
              Committed to personal and professional development for all team
              members.
            </p>
          </motion.div>
          {/* Value Card 4 */}
          <motion.div
            className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            style={{
              backgroundColor:
                "#280040" /* Darker purple for card background */,
            }}
            variants={fadeInUp}
          >
            <div className="text-[#EC4899] text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-sm text-gray-400">
              Prioritizing user experience and satisfaction in every product we
              build.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Section with Improved Scroll Animation */}
      <motion.section 
        ref={contactSectionRef}
        className="max-w-7xl mx-auto px-4 py-16 md:py-12 text-center md:text-left" 
        id="contact-us"
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
              We specialize in creating visual identities for products and
              brands in your company.
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

      {/* Footer */}
      <footer className="bg-[#2B2B2B] py-12 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p className="text-sm">
              We are a leading company specializing in immersive virtual reality
              experiences and cutting-edge hardware.
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media / Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="#" className="text-2xl hover:text-white">
                🐦
              </a>{" "}
              {/* Twitter */}
              <a href="#" className="text-2xl hover:text-white">
                📸
              </a>{" "}
              
            
              {/* Instagram */}
              <a href="#" className="text-2xl hover:text-white">
                📘
              </a>{" "}
              {/* Facebook */}
            </div>
            <p className="text-sm">&copy; 2025 Light. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}