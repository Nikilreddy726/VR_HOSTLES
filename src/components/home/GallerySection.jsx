import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&h=500&fit=crop",
    alt: "Spacious bedroom",
    category: "Rooms"
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&h=500&fit=crop",
    alt: "Clean room interior",
    category: "Rooms"
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&h=500&fit=crop",
    alt: "Modern hostel room",
    category: "Rooms"
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&h=500&fit=crop",
    alt: "Comfortable living space",
    category: "Common Areas"
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&h=500&fit=crop",
    alt: "Kitchen facilities",
    category: "Facilities"
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700&h=500&fit=crop",
    alt: "Study area",
    category: "Common Areas"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Take a Virtual Tour
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See our well-maintained rooms and facilities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-white font-medium">{image.category}</span>
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}