import { motion } from "framer-motion";
import { Play } from "lucide-react";
// import video from "../assets/graceHerovideo.mp4";
import video from "../assets/graceastheticlight.mp4";

const Hero = () => {
  return (
<section className="relative w-full lg:mt-0 md:mt-0 mt-16 aspect-video md:h-[100svh] md:aspect-auto overflow-hidden">

  <div className="absolute inset-0">
    
    <video
      src={video}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover md:object-cover"
    />

    <div className="absolute inset-0 bg-black/30"></div>
  </div>

</section>
  );   
};
export default Hero;
