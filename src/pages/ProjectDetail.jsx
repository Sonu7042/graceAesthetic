import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Container, Grid, Button } from "../component/ui";
import video2 from '../assets/ishaadriilight.mp4'
import img from '../assets/3dImg.jpg'
import img1 from '../assets/gsapScrolling/3d-inter-one.jpg'
import img2 from '../assets/gsapScrolling/3d-inter-two.jpg'
import img3 from '../assets/gsapScrolling/3d-inter-three.jpg'
import img4 from '../assets/gsapScrolling/3d-inter-four.jpg'
import {
    Dribbble,
    Wifi,
    Coffee,
    ShieldCheck,
    Car,
    Waves,
    ShoppingCart,
    TreePine,
    ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const horizontalRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const horizontalScroll = horizontalRef.current;
            const scrollWidth = horizontalScroll.scrollWidth;
            const containerWidth = window.innerWidth;
            const amountToScroll = scrollWidth - containerWidth;

            if (amountToScroll > 0) {
                gsap.to(horizontalScroll, {
                    x: -amountToScroll,
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: () => `+=${amountToScroll}`,
                        scrub: 1,
                        pin: true,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                    },
                });
            }
        });

        return () => ctx.revert();
    }, []);

    const amenities = [
        { icon: Wifi, title: "High Speed Wifi", desc: "Stay connected always" },
        { icon: Car, title: "Private Parking", desc: "Safe and secure" },
        { icon: ShieldCheck, title: "24/7 Security", desc: "Total peace of mind" },
        { icon: Coffee, title: "Cafeteria", desc: "Fresh organic coffee" },
        { icon: Waves, title: "Swimming Pool", desc: "Infinity pool views" },
        { icon: ShoppingCart, title: "Mini Market", desc: "Daily essentials" },
        { icon: Dribbble, title: "Sports Area", desc: "Stay fit and active" },
        { icon: TreePine, title: "Zen Garden", desc: "Peaceful retreats" },
    ];

    return (
        <main className="bg-luxury-light">
            {/* 1. Project Hero (Using existing if available or new custom) */}
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    {/* <img
                 src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
                 alt="Aerial view of mountains and lake"
                 className="w-full h-full object-cover scale-105"
               /> */}
                    <video
                        src={video2}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            </section>



            {/* 2. Project Overview */}
            <section className="py-24 bg-white text-center">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="sm:tracking-[1rem] 
                            md:tracking-[1.6rem] 
                            lg:tracking-[2.25rem] 
                            text-xl 
                            sm:text-2xl 
                            md:text-3xl 
                            lg:text-[40px] 
                            text-gray-500 uppercase text-center xl:mb-12">ISHAADRII</h2>
                        <p className="tracking-[0.6em] 
                            sm:tracking-[1rem] 
                            md:tracking-[1.6rem] 
                            lg:tracking-[1.75rem] 
                            text-xl 
                            sm:text-2xl 
                            md:text-3xl 
                            lg:text-[22px] 
                            text-gray-500 uppercase text-center xl:mb-12">
                            A Beautiful Second Home
                        </p>

                        <p className=" text-justify text-base md:text-2xl lg:text-[18px] font-serif text-luxury-dark/80 ">
                            Crafted for those who crave space, silence, and a slower pace, ISHAADRII brings modern living into perfect harmony with Uttarakhand’s serene beauty. Open spaces, natural light, and thoughtful design come together to create a balanced, elegant lifestyle where comfort meets nature every day.
                        </p>
                        {/* <p className=" text-justify text-base md:text-2xl lg:text-[18px] font-serif text-luxury-dark/80 ">
                            Created for those seeking space, silence, and a slower rhythm away from the city, ISHAADRII brings contemporary living into harmony with Uttarakhand’s serene landscape. The project is shaped by openness, natural light, and a deep connection to its surroundings.
                            From site orientation to interior planning, every element is considered with care. The result is a place that feels balanced and unhurried, offering comfort, clarity, and a beautiful way to live closer to nature.
                        </p> */}
                        {/* <p className="text-base md:text-2xl   lg:text-[18px] font-serif text-luxury-dark/80  leading-relaxed">
                            From site selection and orientation to layout and long-term comfort, every element is considered with purpose. More than just a residence, ISHAADRI offers a way of life that is peaceful, connected, and enduring rooted in simplicity and closeness ..
                        </p> */}
                    </motion.div>
                </div>
            </section>



            {/* 3. Visual Journey (Horizontal Scroll) */}
            <div ref={triggerRef}>
                <div className="h-screen overflow-hidden flex flex-col justify-center">
                    <h2 className="tracking-[0.6em] 
                      sm:tracking-[1rem] 
                      md:tracking-[1.6rem] 
                      lg:tracking-[2.25rem] 
                      text-xl 
                      sm:text-2xl 
                      md:text-3xl 
                      lg:text-[37px] 
                    text-gray-500 uppercase text-center ">
                        {/* Use Inside ISHAADRII */}
                    </h2>
                    <div ref={horizontalRef} className="flex items-end gap-4 md:gap-8 px-[5vw] md:px-[10vw] relative w-max">
                        {[
                            img1,
                            img2,
                            img3,
                            img4
                        ].map((img, i) => (
                            <div
                                key={i}
                                className={`w-[85vw] md:w-[45vw] lg:w-[40vw]
                                               h-[50vh]
                                               ${i % 2 !== 0 ? "md:h-[60vh]" : "md:h-[80vh]"}
                                               shrink-0 relative group rounded-sm overflow-hidden
                                             `}
                            >
                                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Journey ${i}`} />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            {/* 4. Project Amenities */}
            <Section variant="white" padding="lg">
                <Container>
                    <div className="text-center mb-20">
                        <h2 className="tracking-[0.6em] 
                            sm:tracking-[1rem] 
                            md:tracking-[1.6rem] 
                            lg:tracking-[2.25rem] 
                            text-xl 
                            sm:text-2xl 
                            md:text-3xl 
                            lg:text-[37px] 
                            text-gray-500 uppercase text-center xl:mb-12">
                            Project Amenities
                        </h2>
                    </div>
                    <Grid cols={4} gap={8}>
                        {amenities.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 border border-luxury-dark/5 hover:border-primary/30 transition-all duration-500 text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                                <item.icon
                                    className="w-8 h-8 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-500"
                                    strokeWidth={1.5}
                                />
                                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-dark/80 mb-2 truncate">
                                    {item.title}
                                </h3>
                            </motion.div>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* 5. Scenic House Section */}
            <section className="relative h-[80vh] overflow-hidden">
                <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="Scenic House"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer"
                    >
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent translate-x-0.5"></div>
                    </motion.div>
                </div>
            </section>


        </main>
    );
};

export default ProjectDetail;
