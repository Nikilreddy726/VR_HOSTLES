import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles, GraduationCap } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Women-Owned",
    description: "Run by women who understand the needs of female students and professionals"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "24/7 security with strict protocols ensuring your peace of mind"
  },
  {
    icon: Sparkles,
    title: "Hygiene & Comfort",
    description: "Regularly cleaned premises with well-maintained facilities"
  },
  {
    icon: GraduationCap,
    title: "Study-Friendly",
    description: "Peaceful environment perfect for focused academics"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-40" />
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=500&fit=crop"
                alt="Clean hostel room"
                className="rounded-2xl shadow-lg h-64 object-cover w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=500&fit=crop"
                alt="Spacious bedroom"
                className="rounded-2xl shadow-lg h-64 object-cover w-full mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=500&fit=crop"
                alt="Modern room"
                className="rounded-2xl shadow-lg h-64 object-cover w-full -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop"
                alt="Study area"
                className="rounded-2xl shadow-lg h-64 object-cover w-full"
              />
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                VR Hostels For Ladies
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Located in the heart of S.G. Palya, just steps away from Christ University, VR Hostels provides a safe, 
              comfortable, and nurturing environment exclusively for women. Whether you're a student pursuing your 
              dreams or a working professional, we offer the perfect home away from home.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <value.icon className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-gray-500 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}