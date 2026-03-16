import React from "react";
import Hero from "../component/Hero.jsx";
import AboutSection from "../component/AboutSection.jsx";
import GallerySection from "../component/GallerySection.jsx";
import InteriorsSection from "../component/InteriorsSection.jsx";
import WhyChooseSection from "../component/WhyChooseSection.jsx";
import { motion } from "framer-motion";
import NatureCarousel from "../component/NatureCarousel.jsx";
import LuxuryHighlights from "../component/LuxuryHighlights.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <GallerySection />

      {/* Mid-page Text Break */}
      <section className="py-24 bg-white text-center">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="tracking-[0.6em] 
    sm:tracking-[1rem] 
    md:tracking-[1.6rem] 
    lg:tracking-[2.25rem] 
    text-xl 
    sm:text-2xl 
    md:text-3xl 
    lg:text-[37px] 
    text-gray-500 mb-6 uppercase">
              Our Core Values
            </p>

            <p className="text-base text-justify md:text-2xl lg:text-[18px] font-serif text-luxury-dark/80 text-base/8">
              A beautiful way to live is guided by how spaces are planned and experienced over time. Thoughtful proportions, simplicity in design, and an emphasis on everyday comfort shape the homes we create.
              Each living environment is approached with sensitivity to context, materials, and human needs. The intention is to create spaces that feel intuitive, balanced, and enduring, allowing people to slow down, feel grounded, and enjoy a more meaningful way of living.
            </p>
          </motion.div>
        </div>
      </section>

      <InteriorsSection />
      <LuxuryHighlights />
      <NatureCarousel />
      <WhyChooseSection />
    </>
  );
};

export default HomePage;
