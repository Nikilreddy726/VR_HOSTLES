import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react";
import Button from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow mb-6"
            >
              <Shield className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">
                Women-Owned & Operated
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Safe & Comfortable{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Ladies Hostel
              </span>{" "}
              Near Christ University
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Single & double sharing rooms with pure vegetarian food in a secure
              environment designed exclusively for women.
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-gray-600 font-medium">
                4.0 Rating • 11 Reviews
              </span>
            </div>

            {/* CTA BUTTONS */}
<div className="flex flex-wrap gap-3 justify-center lg:justify-start">
  <Button
    onClick={() => (window.location.href = "tel:+917795432870")}
  >
    <Phone className="w-4 h-4 mr-2" />
    Call Now
  </Button>

  <Button
    variant="whatsapp"
    onClick={() =>
      window.open(
        "https://wa.me/917795432870?text=Hi,%20I'm%20interested%20in%20VR%20Hostels",
        "_blank"
      )
    }
  >
    <MessageCircle className="w-4 h-4 mr-2" />
    WhatsApp
  </Button>

  <Button
    variant="outline"
    onClick={() =>
      window.open(
        "https://maps.app.goo.gl/WPKqJDmyZsipsAGC8",
        "_blank"
      )
    }
  >
    <MapPin className="w-4 h-4 mr-2" />
    Directions
  </Button>
</div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800"
              alt="Hostel Room"
              className="relative rounded-3xl shadow-2xl h-[500px] w-full object-cover"
            />

            {/* Floating badges */}
            <div className="absolute -left-8 bottom-20 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">100% Safe</p>
                  <p className="text-sm text-gray-500">For Women</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
