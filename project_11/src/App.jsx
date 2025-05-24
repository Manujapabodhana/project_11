import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "RETIRING 16 TEST TON ANGELO",
      subtitle: "MATHEWS A TRUE WARRIOR",
      buttonText: "READ MORE"
    },
    {
      title: "SRI LANKA CRICKET",
      subtitle: "CHAMPIONS FOREVER",
      buttonText: "LEARN MORE"
    },
    {
      title: "UPCOMING TOURNAMENTS",
      subtitle: "MAJOR CLUB T20 2025",
      buttonText: "VIEW SCHEDULE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        slides={heroSlides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <Sidebar />
    </div>
  );
}

export default App;