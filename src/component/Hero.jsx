import { motion } from "framer-motion";
import { Play } from "lucide-react";
// import video from "../assets/graceHerovideo.mp4";
import video from "../assets/graceastheticlight.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        {/* <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
          alt="Aerial view of mountains and lake"
          className="w-full h-full object-cover scale-105"
        /> */}
        <video
          src={video}
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

      {/* Content */}
      {/* <div className="relative h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md rounded-full p-8 cursor-pointer hover:bg-white/20 transition-all border border-white/30"
        >
          <Play className="text-white fill-white w-12 h-12 translate-x-1" />
        </motion.div>
      </div> */}

      {/* Floating House (Visual Reference from Design) */}
      {/* <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="bg-white/90 backdrop-blur-md p-6 luxury-shadow rounded-sm max-w-xs">
          <h3 className="text-primary font-serif italic mb-2">Mountain Retreat</h3>
          <p className="text-xs text-luxury-dark/70 leading-relaxed uppercase tracking-widest">
            Experience the pinnacle of alpine luxury with panoramic views and bespoke interiors.
          </p>
        </div>
      </motion.div> */}
    </section>
  );
};
export default Hero;
