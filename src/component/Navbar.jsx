import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ContactPopup from "./ContactPopup";
// import logograce from "../assets/graceheader.png";
// import logoisd from "../assets/Ishaadriiheader.png";
import logograce from "../assets/GraceAesthetic.svg";
import logoisd from "../assets/Ishaadrii.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  const isIshaadriPage = location.pathname === "/projects/upcoming/ishaadrii";
  const currentLogo = isIshaadriPage ? logoisd : logograce;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all text-primary duration-500 bg-[#f8f8f5] "
      >
        <div className="container-custom flex justify-between items-center mx-auto px-4">
          <Link to="/">
            <img
              src={currentLogo}
              className="w-32 md:w-40 h-17  object-contain"
              alt="Logo"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-10 items-center">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}

            {/* PROJECTS MEGA DROPDOWN */}
            <div className="relative group ">
              <div className="text-xs uppercase tracking-[0.2em] font-medium hover:text-primary cursor-pointer transition flex items-center gap-1">
                Projects
              </div>

              {/* FIRST LEVEL */}
              <div className="absolute top-full left-0 mt-7 w-56 backdrop-blur-lg bg-white/90 text-primary rounded-xs shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">

                {/* Delivered */}
                <div className="relative group/delivered">
                  <div className="px-4 py-3 text-primary text-xs uppercase tracking-widest hover:bg-white/10 cursor-pointer flex justify-between items-center">
                    Delivered
                  </div>

                  {/* SECOND LEVEL */}
                  <div className="max-h-0 text-primary overflow-hidden group-hover/delivered:max-h-40 transition-all duration-500 ease-in-out bg-black/20 backdrop-blur-lg">
                    <Link
                      to="/projects/delivered/billora"
                      className="block px-8 py-2 text-primary text-xs uppercase tracking-widest text-primary/80 hover:text-primary hover:bg-white/10 transition"
                    >
                      Billora
                    </Link>
                  </div>
                </div>

                {/* Upcoming */}
                <div className="relative text-primary group/upcoming border-t border-white/10">
                  <div className="px-4 py-3 text-xs uppercase tracking-widest hover:bg-white/10 cursor-pointer flex justify-between items-center ">
                    Upcoming
                  </div>

                  {/* SECOND LEVEL */}
                  <div className="max-h-0 rounded-xs overflow-hidden group-hover/upcoming:max-h-60 transition-all duration-500 ease-in-out bg-black/20 backdrop-blur-lg">
                    <Link
                      to="/projects/upcoming/ishaadrii"
                      className="block px-8 text-primary py-2 text-xs uppercase tracking-widest text-primary/80 hover:text-primary hover:bg-white/10 transition"
                    >
                      Ishaadrii
                    </Link>
                    {/* <Link
                      to="#"
                      className="block px-8 py-2 text-white text-xs uppercase tracking-widest text-primary/80 hover:text-primary hover:bg-white/10 transition"
                    >
                      Project2
                    </Link>
                    <Link
                      to="#"
                      className="block px-8 py-2 text-white text-xs uppercase tracking-widest text-primary/80 hover:text-primary hover:bg-white/10 transition"
                    >
                      Project3
                    </Link>
                    <Link
                      to="#"
                      className="block px-8 py-2 text-white text-xs uppercase tracking-widest text-primary/80 hover:text-primary hover:bg-white/10 transition"
                    >
                      Project4
                    </Link> */}
                  </div>
                </div>

              </div>
            </div>

            <button
              onClick={() => setContactOpen(true)}
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 w-full backdrop-blur-xs bg-white text-primary md:hidden border-t border-white/10"
            >
              <div className="flex flex-col p-6 space-y-4">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs uppercase tracking-[0.2em]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.2em]">Projects</p>

                  {/* Delivered Mobile Accordion */}
                  <details className="group/mobile-delivered">
                    <summary className="list-none text-xs uppercase tracking-[0.2em] flex justify-between items-center cursor-pointer pl-2">
                      Delivered <span className="text-[8px] group-open/mobile-delivered:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="pl-4 mt-3 space-y-3 border-l border-white/10 ml-1">
                      <Link to="/projects/delivered/billora" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-primary/70">Billora</Link>
                    </div>
                  </details>

                  {/* Upcoming Mobile Accordion */}
                  <details className="group/mobile-upcoming">
                    <summary className="list-none text-xs uppercase tracking-[0.2em] flex justify-between items-center cursor-pointer pl-2">
                      Upcoming <span className="text-[8px] group-open/mobile-upcoming:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="pl-4 mt-3 space-y-3 border-l border-white/10 ml-1">
                      <Link to="/projects/upcoming/ishaadrii" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-primary/70">Ishaadrii</Link>
                      {/* <Link to="#" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-primary/70">Project2</Link>
                      <Link to="#" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-primary/70">Project3</Link>
                      <Link to="#" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-primary/70">Project4</Link> */}
                    </div>
                  </details>
                </div>

                <button
                  onClick={() => { setContactOpen(true); setMobileMenuOpen(false); }}
                  className="w-full py-3 border border-primary/30 text-primary text-[10px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactPopup
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

export default Navbar;
