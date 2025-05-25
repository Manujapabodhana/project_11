import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const upcomingEvents = [
    {
      title: 'MAJOR CLUB T20 2025',
      date: '22 May 2025',
      time: '2:30 PM',
      venue: 'Colts, Colombo',
      type: 'T20'
    },
    {
      title: 'PREMIER LEAGUE FINAL',
      date: '25 May 2025',
      time: '10:00 AM',
      venue: 'R. Premadasa Stadium',
      type: 'First Class'
    }
  ];

  const clubs = [
    {
      name: 'POLICE SPORTS CLUB',
      logo: '🛡️',
      established: '1932'
    },
    {
      name: 'BLOOMFIELD CRICKET AND ATHLETIC CLUB',
      logo: '🌸',
      established: '1892'
    },
    {
      name: 'COLTS CRICKET CLUB',
      logo: '🏏',
      established: '1906'
    }
  ];

  return (
    <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${
      isExpanded ? 'translate-x-0' : 'translate-x-64'
    }`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 bg-blue-900 text-white p-3 rounded-l-lg hover:bg-blue-800 transition-colors duration-200 shadow-lg"
      >
        {isExpanded ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>

      {/* Sidebar Content */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-800 rounded-l-2xl p-6 w-80 shadow-2xl">
        <h3 className="text-white font-bold text-xl mb-6 flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Upcoming
        </h3>
        
        {/* Upcoming Events */}
        <div className="space-y-4 mb-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-blue-800/60 backdrop-blur-sm rounded-xl p-5 border border-blue-700/50 hover:bg-blue-700/60 transition-all duration-200 transform hover:scale-105">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-blue-200 font-bold text-sm leading-tight">{event.title}</h4>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  {event.type}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-white font-bold">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-blue-200 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-blue-200 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.venue}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clubs Section */}
        <h3 className="text-white font-bold text-lg mb-4">Featured Clubs</h3>
        <div className="space-y-3">
          {clubs.map((club, index) => (
            <div key={index} className="bg-blue-800/60 backdrop-blur-sm rounded-xl p-4 border border-blue-700/50 hover:bg-blue-700/60 transition-all duration-200 group">
              <div className="flex items-center">
                <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                  {club.logo}
                </div>
                <div className="flex-1">
                  <div className="text-white text-sm font-semibold leading-tight">{club.name}</div>
                  <div className="text-blue-300 text-xs mt-1">Est. {club.established}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-blue-700">
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Live Scores
            </button>
            <button className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Highlights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;