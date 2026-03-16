import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ceoHead from "../assets/ownerimg/1.jpg"
import ceoHead2 from "../assets/ownerimg/2.jpeg"
import ceoHead3 from "../assets/ownerimg/3.0.jpg"
import ceoHead4 from "../assets/ownerimg/thankan.jpeg"

const leaderSections = [
    {
        tag: " Co Founder and Co chairman",
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
            "With over 13 years of diversified experience across Sales, Marketing, SaaS, and Logistics, Ms. Pratibha Thakran brings a wealth of knowledge and expertise to the real estate industry. Having worked with leading organizations such as Zomato, Loconav, Signature Global, and Bata, he has successfully built a career defined by strategic growth, client-centric solutions, and operational excellence. ",
        ],
        image: "https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg",
        reverse: false
    },
    {
        tag: "JMD and CEO",
        title: "Mr. Devender Tomar",
        description: [
            "With 22+ years of experience across leading organizations like MRG, Signature Global, Unicon, Airtel, and Godrej Securities, Mr. Devender Tomar brings strategic expertise to real estate consulting. At Team RKI, he delivers transparent, client-focused guidance, driven by his core philosophy  “Service Above All.”"
        ],
        image: ceoHead,
        reverse: false
    }, 
    {
        tag: "MD and COO",
        title: "Mr. Pradeep Kumar",
        description: [
            "Placing environmental respect and human comfort at the center of every project. We create spaces that are as functional as they are beautiful.",
        ],
        image: "https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg",
        reverse: true
    }
];

const Section = ({ section, index, total }) => {
    const sectionRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.9", "end 0.1"]
    });

    // 🔥 Much smoother spring
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 25,
        mass: 1.2
    });

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const textWidth = useTransform(smoothProgress, [0, 0.5], ["100%", isDesktop ? "60%" : "100%"]);
    const imageWidth = useTransform(smoothProgress, [0, 0.5], ["0%", isDesktop ? "30%" : "0%"]);
    const imageOpacity = useTransform(smoothProgress, [0.1, 0.5], [0, 1]);
    const imageScale = useTransform(smoothProgress, [0, 0.2], [1, 1]);
    const columnGap = useTransform(smoothProgress, [0.1, 0.5], ["0px", isDesktop ? "96px" : "0px"]);

    const sectionScale = useTransform(smoothProgress, [0.8, 1], [1, 0.96]);
    const sectionOpacity = useTransform(smoothProgress, [0.85, 1], [1, 0]);

    const numY = useTransform(smoothProgress, [0, 1], [40, -40]);
    const textPadding = useTransform(smoothProgress, [0, 0.5], ["0px", "48px"]);

    return (
        <div
            ref={sectionRef}
            className="relative h-[200vh] w-full"
            style={{ zIndex: index + 1 }}
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#FBFBF9]">
                <motion.div
                    style={{
                        scale: sectionScale,
                        opacity: sectionOpacity,
                        willChange: "transform, opacity"
                    }}
                    className="w-full h-full relative flex items-center"
                >
                    <motion.div
                        style={{ y: numY, willChange: "transform" }}
                        className={`absolute ${section.reverse ? 'left-20' : 'right-20'} top-1/2 -translate-y-1/2 text-[20vw] font-serif text-primary/20 select-none leading-none z-0 pointer-events-none`}
                    >
                    </motion.div>

                    <div className="container-custom relative z-10 w-full px-6 md:px-12">
                        <motion.div
                            style={{ columnGap }}
                            className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-0`}
                        >

                            {/* IMAGE SECTION */}
                            <motion.div
                                style={{
                                    width: imageWidth,
                                    opacity: imageOpacity,
                                    willChange: "transform, opacity"
                                }}
                                className="hidden lg:block bg-white relative overflow-hidden h-[70vh] rounded-sm luxury-shadow"
                            >
                                <motion.img
                                    style={{ scale: imageScale, willChange: "transform" }}
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute bottom-6 ${section.reverse ? 'left-6' : 'right-6'} w-12 h-12 border-b-2 border-primary/30 z-30`} />
                            </motion.div>

                            {/* MOBILE IMAGE */}
                            <div className="lg:hidden w-full mb-8 relative overflow-hidden rounded-sm aspect-4/5 luxury-shadow">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* TEXT */}
                            <motion.div
                                style={{
                                    width: textWidth,
                                    willChange: "transform"
                                }}
                                className="space-y-8 flex flex-col justify-center"
                            >
                                <motion.div
                                    style={{
                                        paddingLeft: section.reverse ? textPadding : "0px",
                                        paddingRight: !section.reverse ? textPadding : "0px"
                                    }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-4">
                                        <motion.span
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="text-primary tracking-[8px] text-[10px] sm:text-xs font-bold uppercase block"
                                        >
                                            {section.tag}
                                        </motion.span>
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-luxury-dark leading-[1.1]">
                                            {section.title}
                                        </h3>
                                    </div>

                                    {/* <div className="space-y-6 text-luxury-dark/80 font-light leading-relaxed text-base md:text-lg border-l-2 border-primary/20 pl-8">
                                        {section.description.map((para, pIndex) => (
                                            <p key={pIndex} className="text-justify lg:text-left max-w-2xl">
                                                {para}
                                            </p>
                                        ))}
                                    </div> */}

                                    <div className="space-y-6 text-luxury-dark/80 font-light leading-relaxed text-base md:text-lg border-l-2 border-primary/20 pl-8">
  {section.description.map((para, pIndex) => (
    <p 
      key={pIndex} 
      className="text-justify lg:text-left w-[600px]"
    >
      {para}
    </p>
  ))}
</div>

                                    <div className="pt-4 flex gap-6 items-center">
                                        <div className="h-px w-12 bg-primary/40" />
                                        <span className="text-[10px] tracking-[4px] uppercase text-primary font-medium">
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
        <section className="relative overflow-visible">

            <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 L10 0 L30 20 L50 0 L70 20 L90 0 L100 10' fill='none' stroke='%23C5A059' stroke-width='2'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px 20px'
                }}
            />

            <div className="relative">
                {leaderSections.map((section, index) => (
                    <Section
                        key={index}
                        section={section}
                        index={index}
                        total={leaderSections.length}
                    />
                ))}
            </div>
        </section>

    );
};

export default Ceo;