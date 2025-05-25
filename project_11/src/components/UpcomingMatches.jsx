import React from 'react';

const UpcomingMatches = () => {
  return (
    <div className="bg-navy-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Upcoming</h2>
      
      <div className="space-y-6">
        <div className="bg-navy-800 p-4 rounded-lg">
          <div className="text-blue-400 font-semibold mb-2">
            MAJOR CLUB T20 2025
          </div>
          <div className="text-xl font-bold mb-2">
            22 May 2025
          </div>
          <div className="text-gray-300">
            Colts, Colombo
          </div>
          
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/police-sports-club.png" 
                alt="Police Sports Club" 
                className="w-16 h-16 object-contain"
              />
              <span className="font-semibold">POLICE SPORTS CLUB</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <img 
                src="/bloomfield.png" 
                alt="Bloomfield Cricket Club" 
                className="w-16 h-16 object-contain"
              />
              <span className="font-semibold">BLOOMFIELD CRICKET AND ATHLETIC CLUB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end mt-4 space-x-2">
        <button className="text-white opacity-75 hover:opacity-100">‹</button>
        <button className="text-white opacity-75 hover:opacity-100">›</button>
      </div>
    </div>
  );
};

export default UpcomingMatches; 