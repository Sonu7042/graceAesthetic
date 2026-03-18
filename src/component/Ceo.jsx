import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import ceoHead from "../assets/ownerimg/1.jpg";
import ceoHead2 from "../assets/ownerimg/2.jpeg";

const leaderSections = [
  {
    tag: "Co Founder and Co chairman",
    title: "Ms. Neeru Tomar",
    description: [
      "With 19 years of experience in Sales, E-Commerce, and Operations, Mrs. Neeru Tomar has worked with global brands like American Express, Citi Group, Aon Hewitt, and Koziva UK. She drives operational efficiency, revenue growth, and customer excellence by combining strategic insight with proven best practices to build sustainable, high-performing businesses."
    ],
    image: ceoHead2,
    reverse: true
  },
  {
    tag: "Founder and Chairman",
    title: "Ms. Pratibha Thakran",
    description: [
      "With over 13 years of diversified experience across Sales, Marketing, SaaS, and Logistics, Ms. Pratibha Thakran brings a wealth of knowledge and expertise to the real estate industry. Having worked with leading organizations such as Zomato, Loconav, Signature Global, and Bata, she has successfully built a career defined by strategic growth, client-centric solutions, and operational excellence."
    ],
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg",
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
  {
    tag: "COO",
    title: "Mr. Pardeep Kumar",
    description: [
      "A highly experienced professional in the real estate development sector, with strong expertise in managing end-to-end operations, large-scale project execution, and strategic business growth. Known for driving efficiency and ensuring timely delivery of projects, he has successfully led cross-functional teams, optimized resources, and built strong client relationships. With deep industry knowledge and a results-oriented approach, he has consistently contributed to organizational growth, operational excellence, and enhanced customer satisfaction."
    ],
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg",
    reverse: false
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