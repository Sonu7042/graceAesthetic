import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Testimonials from './Testimonials';
import Ceo from '../component/Ceo';

const AboutPage = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    const teamMembers = [
        {
            name: "KARAN MEHTA",
            role: "DIRECTOR & CO-FOUNDER",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "KANISHKA SINGH",
            role: "CO-FOUNDER & PARTNER",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "VIKRAM MALHOTRA",
            role: "DIRECTOR OF BUSINESS OPERATIONS",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className=" pt-22">
            {/* Hero Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
                <motion.span
                    {...fadeIn}
                    className="block text-[#F1A605] tracking-[0.4em] text-xs md:text-sm lg:text-[1rem] font-medium uppercase mb-6"
                >
                    About Grace Aesthetic
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-[16px] md:text-2xl lg:text-[36px] font-sans lg:tracking-[20px] md:tracking-[18px] sm:tracking-[12px] font-normal text-luxury-dark mb-4.5 uppercase"
                >
                    A Thoughtful Way of Living
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-5xl mx-auto text-[#3D3D3D] font-light leading-relaxed text-sm text-justify lg:text-center md:text-lg"
                >
                    Grace Aesthetic was founded on a simple belief  a home should enhance the way we live every day.

                    We create beautifully balanced living environments where refined design meets practical comfort. Our spaces are calm, proportioned with care, and thoughtfully connected to their natural surroundings. Rather than loud luxury, we believe in quiet sophistication  homes that feel timeless, grounded, and enduring.

                    Every development reflects our commitment to harmony between nature, architecture, and modern life.
                </motion.p>
            </section>

            {/* Main Image Banner */}

            <section className="px-4 mx-auto w-full flex justify-center items-center lg:mb-32  group lg:pt-16">
                <div className='w-317.5'>

                    <div className='mb-12'>
                        <div class="w-full px-4 h-px bg-[#F1A605] my-6"></div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="max-w-7xl mx-auto h-100 md:h-150 overflow-hidden rounded-sm relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                            alt="Grace Aesthetic Living"
                            className="w-full h-full object-cover grayscale-20 group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer group"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                    <div className="w-0 h-0 border-t-10 border-t-transparent border-l-18 border-l-luxury-dark border-b-10 border-b-transparent ml-1"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-8 left-8 w-12 h-px bg-white/50"></div>
                        <div className="absolute top-8 left-8 w-px h-12 bg-white/50"></div>
                        <div className="absolute bottom-8 right-8 w-12 h-px bg-white/50"></div>
                        <div className="absolute bottom-8 right-8 w-px h-12 bg-white/50"></div>
                    </motion.div>
                </div>

            </section>

            {/* What We Do Section */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        {...fadeIn}
                        className=" text-3xl md:text-4xl font-serif tracking-[0.2em] text-left text-luxury-dark mb-10 font-medium uppercase"
                    >
                        WHAT WE DO
                    </motion.h2>
                    <motion.p
                        {...fadeIn}
                        className="max-w-6xl font-light text-[#3D3D3D] text-justify md:text-left leading-normal tracking-[8%] text-base md:text-xl"
                    >
                        We design and develop well-planned homes in healthier, greener environments  blending aesthetic refinement with everyday functionality.

                        From mindful site selection to responsible construction practices, each project is guided by clarity, integrity, and long-term value. We focus on creating communities that offer comfort, connection, and seamless access to contemporary living.

                        At Grace Aesthetic, we go beyond building structures  we shape meaningful spaces designed to support well-being and elevate everyday life.
                    </motion.p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="bg-[#EAE8E3] py-16 md:py-20 lg:py-24 px-4 md:px-10 lg:px-20 flex flex-col gap-24 lg:gap-40 mb-32 ">

                <Ceo />



                {/* TEAM GRID */}
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col group"
                        >
                            <div className="overflow-hidden mb-5 rounded-sm aspect-94/115">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <span className="w-full text-[10px] tracking-[4px] text-[#F1A605] font-bold uppercase mb-1">
                                {member.role}
                            </span>

                            <h4 className="w-full text-[18px] md:text-[16px] sm:text-[12px] font-sans lg:tracking-[8px] text-luxury-dark uppercase">
                                {member.name}
                            </h4>
                        </motion.div>
                    ))}
                </div>

            </section>


            {/* Testimonials */}
            <Testimonials />
        </div>
    );
};

export default AboutPage;
