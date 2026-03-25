import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Instagram, Facebook, Linkedin, Youtube, CheckCircle2, Mail, Phone } from "lucide-react";
import logograce from "../assets/gracefooter.png";
// import logoisd from "../assets/Ishaadriifooter.png";
import logoisd from "../assets/footer_logo.png";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  const location = useLocation();
  const isIshaadriPage = location.pathname === "/projects/ishaadrii";
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

 if (name === "phone") {
  if (!/^\d*$/.test(value)) return;

  if (value.length === 1 && !/[6-9]/.test(value)) return;

  if (value.length > 10) return;

  if (value.length === 10) {
    setPhoneError("");
  } else {
    setPhoneError("Phone number must be 10 digits");
  }
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
        "yn3yTZ03aqHR-cyvm"
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
          setIsSuccess(false);
        }, 5000);
      })
      .catch(() => {
        alert("Something went wrong");
        setLoading(false);
      });
  };

  return (
    <footer className="bg-[#f3f1eb] text-luxury-dark relative">

      {/* TOP SECTION */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex pb-6 pt-10 flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">

        {/* LOGO */}
        {/* <div className="flex items-center justify-center lg:justify-center w-full lg:w-1/2">
          <Link to="/">
            <img
              src={currentLogo}
              alt="Logo"
              className="max-w-[200px] sm:max-w-[240px] md:max-w-[260px]"
            />
          </Link>
        </div> */}
        <div className="flex items-center gap-4 justify-center flex-col w-full lg:w-1/2">
          <Link to="/">
            <img
              src={currentLogo}
              alt="Logo"
              className="max-w-full md:max-w-[260px] transition-all duration-500"
            />
          </Link>
        </div>


        {/* FORM or THANK YOU */}
        {isSuccess ? (
          <div className="w-full lg:w-1/2 max-w-md flex flex-col items-center justify-center p-10 text-center space-y-4">
            <CheckCircle2 size={60} className="text-[#2f5d50]" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-luxury-dark">Thank You!</h3>
            <p className="text-luxury-dark/70">
              Your form has been successfully submitted. We will be get in touch with you soon!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 max-w-md flex flex-col space-y-4"
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
                  className="w-full bg-transparent border-b border-luxury-dark/30 focus:outline-none focus:border-luxury-dark"
                />

                {field.name === "phone" && phoneError && (
                  <span className="text-red-500 text-[12px]">
                    {phoneError}
                  </span>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="self-start bg-[#2f5d50] text-white text-[10px] tracking-[0.3em] px-8 py-3 uppercase hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {message && !isSuccess && (
              <p className="text-sm text-red-600">
                {message}
              </p>
            )}
          </form>
        )}
      </div>

      {/* DIVIDER */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] border-t border-[#2f5d50]/40" />
      </div>

      {/* MIDDLE SECTION */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">

        {/* CONTACT */}
        <div>
          <h4 className="text-sm mb-3 ">Contact Us</h4>
          <p className="text-sm text-luxury-dark/70">For appointments, inquiries, or support, please contact us at:</p>

          <div className="text-sm text-luxury-dark/70 space-y-1">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=graceaestheticofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-black"
            >
              <Mail size={16} className="shrink-0" />
              <span> graceaestheticofficial@gmail.com</span>
            </a>

            <a href="tel:+919667376123" className="flex items-center gap-2 hover:text-black">
              <Phone size={16} className="shrink-0" />
              <span> +919667376123</span>
            </a>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://www.instagram.com/graceaestheticofficial/" target="_blank" rel="noopener noreferrer" className="text-luxury-dark/70 hover:text-black hover:scale-110 transition-transform">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61588179783847" target="_blank" rel="noopener noreferrer" className="text-luxury-dark/70 hover:text-black hover:scale-110 transition-transform">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/company/grace-aesthetic" target="_blank" rel="noopener noreferrer" className="text-luxury-dark/70 hover:text-black hover:scale-110 transition-transform">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.youtube.com/@graceaestheticofficial" target="_blank" rel="noopener noreferrer" className="text-luxury-dark/70 hover:text-black hover:scale-110 transition-transform">
              <Youtube size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="text-sm mb-3">Marketing Office</h4>
          <p className="text-sm text-luxury-dark/70">
            Office No 111, 112 Spaze Platinum <br />
            Tower, Sohna Road, Sector 47,<br />
            Gurugram, Haryana - 122018
          </p>
        </div>

        <div>
          <h4 className="text-sm mb-3">Registered Office</h4>
          <p className="text-sm text-luxury-dark/70">
            Village Bandran, Tehsil Sult, Post <br />
            Sanker, Almora, Uttarakhand - 244715
          </p>
        </div>

        {/* LINKS */}
        <div className="flex flex-col items-start xl:pl-20 gap-y-2 text-sm">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Blogs", path: "/blog" },
            // { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-luxury-dark/70 hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>


      <a
        href="https://wa.me/919667376123"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-12 right-6 lg:bottom-10 lg:right-10 z-50 bg-[#25D366] text-white  rounded-full p-[4px] hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >

        <IoLogoWhatsapp size={40} />

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-8 h-8 fill-current"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.6c-33.6 0-66.4-8.9-95.4-25.8l-6.8-4-71 18.6 18.9-69.2-4.4-7C46.8 293.7 37 259 37 222c0-103.1 84-187 187.1-187 50 0 97 19.5 132.3 54.9 35.4 35.4 54.8 82.3 54.8 132.3 0 103.2-83.9 187.1-187 187.1zm102.6-140.2c-5.6-2.8-33.3-16.4-38.5-18.3-5.2-1.9-9-2.8-12.8 2.8-3.7 5.6-14.6 18.3-17.9 22-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.8-8.8-45.3-27.9-16.7-14.9-28-33.4-31.3-39-3.3-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.6 8.4-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7-.5-9.9-1.4-2.8-12.8-30.9-17.5-42.3-4.6-11.1-9.2-9.6-12.8-9.8-3.3-.2-7-.2-10.8-.2-3.8 0-9.9 1.4-15 7-5.2 5.6-19.8 19.3-19.8 47.1 0 27.8 20.3 54.6 23.1 58.4 2.8 3.8 39.8 60.8 96.3 85.2 13.4 5.8 23.9 9.3 32 11.9 13.5 4.3 25.8 3.7 35.5 2.2 10.9-1.6 33.3-13.6 38-26.8 4.7-13.2 4.7-24.4 3.3-26.8-1.5-2.3-5.2-3.7-10.8-6.5z"/>
        </svg> */}
      </a>
      {/* BOTTOM */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-4 mt-6 flex flex-col md:flex-row items-center justify-start gap-4 text-xs text-luxury-dark/60">
        <p>© 2026 Grace Aesthetic</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-black">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;