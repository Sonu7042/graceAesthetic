import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import logograce from "../assets/gracefooter.png";
import logoisd from "../assets/Ishaadriifooter.png";

const Footer = () => {
  const location = useLocation();
  const isIshaadriPage = location.pathname === "/projects";
  const currentLogo = isIshaadriPage ? logoisd : logograce;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 🆕 Phone validation logic
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; // only digits
      if (value.length > 10) return;

      setPhoneError(
        value.length === 10 ? "" : "Phone number must be 10 digits",
      );
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_spul0nj",
        "template_ao8n7dh",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          from_number: formData.phone,
          message: formData.message,
          to_name: "Grace Aesthetic",
          to_email: "graceaestheticofficial@gmail.com",
        },
        "yn3yTZ03aqHR-cyvm",
      )
      .then(() => {
        setIsSuccess(true);
        setMessage("Message sent successfully!");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });
        setLoading(false);
        setTimeout(() => {
          setMessage("");
        }, 5000);
      })
      .catch(() => {
        alert("Something went wrong");
        setLoading(false);
      });
  };

  return (
    <footer className="bg-[#f3f1eb] text-luxury-dark">
      {/* TOP SECTION */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 flex pb-4 pt-10 flex-col lg:flex-row items-center justify-between">
        {/* LEFT – LOGO */}
        <div className="flex items-center gap-4 justify-center flex-col w-full lg:w-1/2">
          <img
            src={currentLogo}
            alt="Logo"
            className="max-w-full md:max-w-[260px] transition-all duration-500"
          />
        </div>

        {/* RIGHT – FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 max-w-md flex flex-col justify-center space-y-4"
        >
          <div className="text-sm sm:text-xl">Enquiry</div>

          {[
            { label: "FULL NAME", name: "fullName" },
            { label: "PHONE NUMBER", name: "phone" },
            { label: "EMAIL", name: "email" },
            { label: "MESSAGE", name: "message" },
          ].map((field, i) => (
            <div key={i}>
              <label className="block text-[10px] tracking-[0.3em] text-luxury-dark/60">
                {field.label}
              </label>

              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="
        w-full 
        bg-transparent 
        border-b 
        border-luxury-dark/30 
        focus:outline-none 
        focus:border-luxury-dark
      "
              />

              {/* ✅ Show Error Only Under Phone Field */}
              {field.name === "phone" && phoneError && (
                <span className="text-red-500 text-[12px] mt-1">
                  {phoneError}
                </span>
              )}
            </div>
          ))}
          <button
            type="submit"
            disabled={loading}
            className="
              self-start
              bg-[#2f5d50] 
              text-white 
              text-[10px]    
              tracking-[0.3em] 
              px-8 py-3 
              uppercase 
              shadow-md
            "
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {message && (
            <p
              className={`text-sm text-center ${
                isSuccess ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>

      {/* DIVIDER */}
      <div className="flex justify-center items-center mt-4">
        <div className="w-full max-w-[1280px] border-t border-[#2f5d50]/40" />
      </div>

      {/* MIDDLE NAV */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 py-8 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* CONTACT */}
        <div className="flex flex-col items-start text-strat">
          <h4 className="text-sm mb-3 font-semibold">Contact</h4>

          <div className="text-sm text-luxury-dark/70 space-y-1">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=graceaestheticofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-black transition duration-200 cursor-pointer"
            >
              graceaestheticofficial@gmail.com
            </a>

            <a
              href="tel:+919910346123"
              className="block hover:text-black transition duration-200 cursor-pointer"
            >
              Call: +91 99103 46123
            </a>
          </div>

          <div className="flex gap-4 mt-5">
            {["in", "f", "ig", "yt"].map((icon) => (
              <div
                key={icon}
                className="w-8 h-8 border border-luxury-dark/40 rounded-full flex items-center justify-center text-xs"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* ADDRESS */}
        <div className="flex flex-col items-start text-start">
          <h4 className="text-sm mb-3">Marketing Office</h4>
          <p className="text-sm text-luxury-dark/70">
            Office No 111, 112 Spaze Platinum <br />
            Tower, Sohna Road, Sector 47 ,<br />
            Gurugram, Haryana 122018
          </p>
        </div>

        <div className="flex flex-col items-start text-start">
          <h4 className="text-sm mb-3">Registered Office</h4>
          <p className="text-sm text-luxury-dark/70">
            Village Bandran, Tehsil Sult, Post <br />
            Sanker, Sankar, Almora, Bhikia <br />
            Sain, Uttarakhand, India, 244715
          </p>
        </div>

        {/* LINKS */}
        <div className="lg:col-span-1 flex flex-col items-center lg:items-start lg:ml-48 text-start gap-y-2 text-sm">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Blogs", path: "/blog" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-luxury-dark text-luxury-dark/70 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 pb-4 mt-6 flex flex-col md:flex-row items-center gap-6 text-xs text-luxury-dark/60">
        <p>© 2026 Grace Aesthetic</p>
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
