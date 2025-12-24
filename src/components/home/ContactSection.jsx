import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

import Button from "../ui/button";
import FloatingInput from "../ui/FloatingInput";
import FloatingTextarea from "../ui/FloatingTextarea";


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hi, I'm ${formData.name}.

I'm interested in VR Hostels For Ladies - 2.

Phone: ${formData.phone}
Email: ${formData.email}

Message: ${formData.message}`;

    window.open(
      `https://wa.me/917795432870?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
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
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a
                      href="tel:+917795432870"
                      className="text-purple-600 font-medium"
                    >
                      +91 77954 32870
                    </a>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
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

            {/* MAP (FIXED) */}
            <div className="rounded-2xl overflow-hidden h-64 border border-gray-100">
              <iframe
                title="VR Hostels Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5847168181897!2d77.60234631482195!3d12.934799690877854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b1bbd50001%3A0x94ef7f98a9b2a53a!2sChrist%20University!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Send an Enquiry
              </h3>
              <p className="text-gray-500 mb-6">
                Fill out the form and we'll get back to you
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <FloatingInput
                  id="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />

                <FloatingInput
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />

                <FloatingInput
                  id="email"
                  label="Email (Optional)"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <FloatingTextarea
                  id="message"
                  label="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
