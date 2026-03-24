import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2 } from "lucide-react";

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState(""); 
  const [isSuccess, setIsSuccess] = useState(false);
  

   const onChange = (e) => {
    const { name, value } = e.target;

    // 🆕 Phone validation logic
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; // only digits
      if (value.length > 10) return;

      setPhoneError(
        value.length === 10 ? "" : "Phone number must be 10 digits"
      );
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        "service_spul0nj",
        "template_ao8n7dh",
        {
          from_name: formData.name,
          from_email: formData.email,
          from_number: formData.phone,
          to_name:"Grace Aesthetic",
          to_email:"graceaestheticofficial@gmail.com",

        },
        "yn3yTZ03aqHR-cyvm",
      )
      .then(
        () => {
            setIsSuccess(true);
          setMessage("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "" });
          setLoading(false);
          setTimeout(() => {
            setMessage("");
            setIsSuccess(false);
            onClose();
          }, 3000);
        },
        (error) => {
         setIsSuccess(false);
          setMessage("Something went wrong");
          setLoading(false);
        },
      );
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-black"
          >
            ×
          </button>
        </div>

        {/* Form */}
        {/* Form OR Thank You */}
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center p-10 text-center space-y-4">
            <CheckCircle2 size={60} className="text-green-500" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
            <p className="text-gray-600">
              Your form has been successfully submitted. We will be get in touch with you soon!
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-4 p-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={onChange}
                required
                className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={onChange}
                required
                className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
              placeholder="Phone (10 digits)"
                value={formData.phone}
                onChange={onChange}
                required
                className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {phoneError && (
                <span className="text-red-500 text-sm mt-1">
                  {phoneError}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-primary text-white py-2 rounded-lg hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {message && !isSuccess && (
              <p className="text-sm text-center text-red-600">
                {message}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPopup;
