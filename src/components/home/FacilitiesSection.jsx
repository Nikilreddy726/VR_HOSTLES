import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wind, 
  Sparkles, 
  Utensils, 
  ShieldCheck, 
  BookOpen, 
  Clock,
  Wifi,
  Droplets
} from 'lucide-react';

const facilities = [
  {
    icon: Wind,
    title: "Single & Double Sharing Rooms",
    description: "Choose from single or double sharing rooms with excellent ventilation",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Regular Cleaning",
    description: "Daily housekeeping ensures spotless rooms and common areas",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Utensils,
    title: "Pure Veg Food",
    description: "Hygienic, nutritious pure vegetarian meals prepared daily",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: ShieldCheck,
    title: "Secure Premises",
    description: "24/7 security with CCTV surveillance and controlled access",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BookOpen,
    title: "Study-Friendly Environment",
    description: "Quiet, peaceful atmosphere perfect for academics",
    color: "from-indigo-500 to-violet-500"
  },
  {
    icon: Clock,
    title: "Open Till 11 PM",
    description: "Flexible timings for students with evening classes",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: Wifi,
    title: "Wi-Fi Connectivity",
    description: "High-speed internet for study and entertainment",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Droplets,
    title: "24/7 Water Supply",
    description: "Uninterrupted hot and cold water availability",
    color: "from-sky-500 to-blue-500"
  }
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Amenities</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Facilities & Amenities
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need for a comfortable and productive stay
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${facility.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <facility.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{facility.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}