import React from 'react';
import HeroSection from '../components/home/HeroSection';
import HighlightsBar from '../components/home/HighlightsBar';
import AboutSection from '../components/home/AboutSection';
import FacilitiesSection from '../components/home/FacilitiesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';
import StickyContactButtons from '../components/home/StickyContactButtons';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HighlightsBar />
      <AboutSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <StickyContactButtons />
    </div>
  );
}
