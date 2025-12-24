import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Christ University Student",
    text: "The rooms are incredibly spacious and well-maintained. I've been staying here for 2 years and couldn't be happier with my choice!",
    rating: 5,
    avatar: "PS"
  },
  {
    name: "Anjali Menon",
    role: "Working Professional",
    text: "As a working woman, safety is my priority. VR Hostels gives me peace of mind with their security measures. The pure veg food is also hygienic and tasty.",
    rating: 4,
    avatar: "AM"
  },
  {
    name: "Sneha Reddy",
    role: "MBA Student",
    text: "Perfect location near Christ University. The study-friendly environment helped me focus on my academics. Highly recommend!",
    rating: 5,
    avatar: "SR"
  },
  {
    name: "Kavitha R.",
    role: "IT Professional",
    text: "Clean rooms, good maintenance, and friendly staff. The 11 PM curfew works perfectly for my work schedule.",
    rating: 4,
    avatar: "KR"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            What Our Residents Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-gray-600 font-medium ml-2">4.0 Google Rating • 11 Reviews</span>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-purple-100" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}