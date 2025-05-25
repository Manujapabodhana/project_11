import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = ({ slides, currentSlide, setCurrentSlide }) => {
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 hero-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-white rounded-full animate-pulse delay-2000"></div>
      </div>
      
      {/* Cricket player silhouette */}
      <div className="absolute right-0 top-0 h-full w-1/2 cricket-silhouette opacity-30"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="transform transition-all duration-1000 ease-out">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {slides[currentSlide].title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="group-hover:mr-2 transition-all duration-200">{slides[currentSlide].buttonText}</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="w-12 h-12" />
      </button>
    </div>
  );
};

export default HeroSection;