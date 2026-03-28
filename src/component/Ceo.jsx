import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import ceoHead from "../assets/ownerimg/11.png";
import ceoHead2 from "../assets/ownerimg/2.jpeg";
import ceoHead3 from "../assets/ownerimg/grace_parthiba_New.jpg";
import ceoHead4 from "../assets/ownerimg/grace_pradeep_New.jpg";

const leaderSections = [
  {
    tag: "Founder and Chairman",   
    title: "Mrs. Pratibha Thakran",
    description: [
      "With over 21 years of entrepreneurial experience, Mrs. Pratibha Thakran brings strong operational expertise and business leadership to the real estate space. As co-proprietor of a well-established pharmaceutical company, she has built and managed efficient systems while driving consistent growth.",
      "She is also the force behind the successful development of TerraTrek Billora, a premium resort in Jim Corbett featuring a rooftop restaurant and modern amenities. Her ability to execute high-quality projects reflects her commitment to excellence, transparency, and delivering long-term value in every real estate venture."
    ],
    image: ceoHead3,
    reverse: false
  },
  {
    tag: "Co Founder and Co chairman",
    title: "Mrs. Neeru Tomar",
    description: [
      "With 19 years of experience in Sales, E-Commerce, and Operations, Mrs. Neeru Tomar has worked with global brands like American Express, Citi Group, Aon Hewitt, and Koziva UK. She drives operational efficiency, revenue growth, and customer excellence by combining strategic insight with proven best practices to build sustainable, high-performing businesses."
    ],
    image: ceoHead2,
    reverse: true
  },
  
  {
    tag: "COO",
    title: "Mr. Pardeep Kumar",
    description: [
      "Mr. Pradeep Kumar brings extensive business management experience and a strong focus on operational excellence. As co-proprietor of a successful pharmaceutical enterprise, he has played a key role in building and scaling a stable, high-performing organization.",
      "He has also contributed to the development of TerraTrek Billora, a well-crafted resort in Jim Corbett known for its quality and thoughtful design. His structured approach and attention to detail ensure reliable execution and a seamless experience for clients across real estate projects."
    ],
    image: ceoHead4,
    reverse: false
  },
  {
    tag: "JMD and CEO",
    title: "Mr. Devender Tomar",
    description: [
      "With 22+ years of experience across leading organizations like MRG, Signature Global, Unicon, Airtel, and Godrej Securities, Mr. Devender Tomar brings strategic expertise to real estate consulting. At Team RKI, he delivers transparent, client-focused guidance, driven by his core philosophy “Service Above All.”"
    ],
    image: ceoHead,
    reverse: true
  },
];  

const Section = ({ section, index }) => {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    mass: 1.2
  });

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Safe responsive animations
  const textWidth = useTransform(
    smoothProgress,
    [0, 0.5],
    ["100%", isDesktop ? "60%" : "100%"]
  );

  const imageWidth = useTransform(
    smoothProgress,
    [0, 0.5],
    ["0%", isDesktop ? "30%" : "0%"]
  );

  const imageOpacity = useTransform(smoothProgress, [0.1, 0.5], [0, 1]);

  const columnGap = useTransform(
    smoothProgress,
    [0.1, 0.5],
    ["0px", isDesktop ? "96px" : "0px"]
  );

  const sectionScale = useTransform(smoothProgress, [0.8, 1], [1, 0.96]);
  const sectionOpacity = useTransform(smoothProgress, [0.85, 1], [1, 0]);

  const textPadding = useTransform(
    smoothProgress,
    [0, 0.5],
    ["0px", isDesktop ? "48px" : "0px"]
  );

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen lg:h-[200vh] w-full"
      style={{ zIndex: index + 1 }}
    >
      <div className="sticky top-0 min-h-screen flex items-center bg-[#FBFBF9]">
        <motion.div
          style={{ scale: sectionScale, opacity: sectionOpacity }}
          className="w-full flex items-center"
        >
          <div className="w-full px-4 sm:px-6 md:px-12">
            <motion.div
              style={{ columnGap }}
              className={`flex flex-col ${
                section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 lg:gap-0`}
            >
              {/* Desktop Image */}
              <motion.div
                style={{
                  width: imageWidth,
                  opacity: imageOpacity
                }}
                className="hidden lg:block h-[70vh] overflow-hidden rounded-sm"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Mobile Image */}
              <div className="lg:hidden w-full mb-6 overflow-hidden rounded-sm aspect-[4/5]">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <motion.div
                style={{ width: textWidth }}
                className="space-y-6 sm:space-y-8 flex flex-col justify-center"
              >
                <motion.div
                  style={{
                    paddingLeft: section.reverse ? textPadding : "0px",
                    paddingRight: !section.reverse ? textPadding : "0px"
                  }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <span className="text-primary tracking-[6px] text-[10px] sm:text-xs font-bold uppercase block">
                      {section.tag}
                    </span>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
                      {section.title}
                    </h3>
                  </div>

                  {/* ✅ FULL TEXT (NO CUT, NO DOTS) */}
                  <div className="space-y-4 sm:space-y-5 text-base md:text-lg text-luxury-dark/80 font-light leading-relaxed border-l-2 border-primary/20 pl-4 sm:pl-6">
                    {section.description.map((para, i) => (
                      <p
                        key={i}
                        className="text-justify lg:text-left w-full break-words"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-4 items-center">
                    <div className="h-px w-10 bg-primary/40" />
                    <span className="text-[10px] tracking-[3px] uppercase text-primary">
                      Grace Aesthetic Leadership
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Ceo = () => {
  return (
    <section className="relative">
      {leaderSections.map((section, index) => (
        <Section key={index} section={section} index={index} />
      ))}
    </section>
  );
};

export default Ceo;