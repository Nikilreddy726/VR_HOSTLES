import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Utensils, ShieldCheck, MapPin } from 'lucide-react';

const highlights = [
  { icon: Users, text: "Women-Only Hostel", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Home, text: "Single & Double Sharing", color: "text-pink-600", bg: "bg-pink-50" },
  { icon: Utensils, text: "Pure Veg Food", color: "text-orange-600", bg: "bg-orange-50" },
  { icon: ShieldCheck, text: "Safe Locality", color: "text-green-600", bg: "bg-green-50" },
  { icon: MapPin, text: "Near Christ University", color: "text-blue-600", bg: "bg-blue-50" },
];

export default function HighlightsBar() {
  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-3"
            >
              <motion.div 
                className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </motion.div>
              <span className="text-gray-700 font-medium text-sm md:text-base">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}