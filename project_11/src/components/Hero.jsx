import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('')",
          filter: "brightness(0.8)"
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              RETIRING 16 TEST TON ANGELO MATHEWS A TRUE WARRIOR
            </h1>
            <Link 
              to="/news/angelo-mathews-retirement"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl opacity-75 hover:opacity-100">
        ‹
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl opacity-75 hover:opacity-100">
        ›
      </button>
    </div>
  );
};

export default Hero; 