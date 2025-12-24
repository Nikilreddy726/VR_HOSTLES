import React, { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";

// Floating Label Input Component
const FloatingInput = ({ label, value, onChange, type = "text", required = false, error = "" }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const isFloating = isFocused || hasValue;

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        placeholder=" "
        className={`peer w-full px-4 pt-6 pb-2 text-gray-900 bg-transparent border-2 rounded-xl focus:outline-none transition-all ${
          error ? "border-red-500 focus:border-red-500" : "border-gray-400 focus:border-purple-600"
        }`}
      />
      <label
        className={`absolute left-3 px-1 transition-all pointer-events-none bg-white ${
          isFloating
            ? "-top-2.5 text-xs font-semibold"
            : "top-4 text-base"
        } ${error ? "text-red-500" : isFloating ? "text-purple-600" : "text-gray-700"}`}
      >
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>
      )}
    </div>
  );
};

// Floating Label Textarea Component
const FloatingTextarea = ({ label, value, onChange, rows = 4, error = "" }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const isFloating = isFocused || hasValue;

  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={rows}
        placeholder=" "
        className={`peer w-full px-4 pt-6 pb-2 text-gray-900 bg-transparent border-2 rounded-xl focus:outline-none transition-all resize-none ${
          error ? "border-red-500 focus:border-red-500" : "border-gray-400 focus:border-purple-600"
        }`}
      />
      <label
        className={`absolute left-3 px-1 transition-all pointer-events-none bg-white ${
          isFloating
            ? "-top-2.5 text-xs font-semibold"
            : "top-4 text-base"
        } ${error ? "text-red-500" : isFloating ? "text-purple-600" : "text-gray-700"}`}
      >
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>
      )}
    </div>
  );
};

// Button Component
const Button = ({ children, onClick, type = "button", variant = "primary", className = "", disabled = false }) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all";
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
    whatsapp: "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    // Email validation (optional but if provided, must be valid)
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const message = `Hi, I'm ${formData.name}.

I'm interested in VR Hostels For Ladies - 2.

Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

Message: ${formData.message || "No additional message"}`;

    window.open(
      `https://wa.me/917795432870?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: CONTACT INFO */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600">
                      167, 4th Cross Rd, near Christ University,
                      <br />
                      S.G. Palya, Bengaluru – 560029
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a
                      href="tel:+917795432870"
                      className="text-purple-600 font-medium hover:underline"
                    >
                      +91 77954 32870
                    </a>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Visiting Hours
                    </p>
                    <p className="text-gray-600">Open till 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-8">
                <Button
                  className="flex-1 px-5 py-3 text-sm"
                  onClick={() => (window.location.href = "tel:+917795432870")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>

                <Button
                  variant="whatsapp"
                  className="flex-1 px-5 py-3 text-sm"
                  onClick={() =>
                    window.open("https://wa.me/917795432870", "_blank")
                  }
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden h-64 border border-gray-200 shadow-sm bg-gray-100">
              <iframe
                title="VR Hostels Location"
                src="https://maps.google.com/maps?q=12.934499690878182,77.60044631482195&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT: FORM WITH FLOATING LABELS */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Send an Enquiry
              </h3>
              <p className="text-gray-500 mb-6">
                Fill out the form and we'll get back to you
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <FloatingInput
                  label="Full Name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  required
                  error={errors.name}
                />

                <FloatingInput
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, phone: value });
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  required
                  error={errors.phone}
                />

                <FloatingInput
                  label="Email (Optional)"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  error={errors.email}
                />

                <FloatingTextarea
                  label="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                />

                <Button
                  type="submit"
                  className="w-full px-5 py-3 text-sm"
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Opening WhatsApp…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}