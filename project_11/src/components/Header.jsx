import React, { useState } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', hasDropdown: false },
    { name: 'INTERNATIONAL', hasDropdown: true, items: ['Test Matches', 'ODI', 'T20I', 'Women\'s Cricket'] },
    { name: 'DOMESTIC', hasDropdown: true, items: ['Premier League', 'Club Cricket', 'School Cricket'] },
    { name: 'NEWS', hasDropdown: false },
    { name: 'MEDIA', hasDropdown: true, items: ['Photos', 'Videos', 'Press Releases'] },
    { name: 'COACHING', hasDropdown: true, items: ['Programs', 'Certification', 'Development'] },
    { name: 'GALLERY', hasDropdown: true, items: ['Match Photos', 'Events', 'Historical'] },
    { name: 'ABOUT US', hasDropdown: true, items: ['History', 'Management', 'Contact'] }
  ];

  return (
    <header className="relative z-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl flex items-center justify-center border-4 border-yellow-300 shadow-lg">
                <div className="text-2xl">🦁</div>
              </div>
              <div className="ml-4">
                <div className="text-xl font-bold text-blue-900">Sri Lanka</div>
                <div className="text-sm font-semibold text-blue-700">Cricket</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    className="flex items-center text-gray-700 hover:text-blue-600 font-semibold transition-all duration-200 py-2"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />}
                  </button>
                  
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50">
                      {item.items?.map((subItem, subIndex) => (
                        <a 
                          key={subIndex}
                          href="#" 
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 rounded-full px-6 py-2 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 w-48"
                />
                <Search className="absolute left-4 top-2.5 w-4 h-4 text-gray-500" />
              </div>

              {/* Buttons */}
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                Buy Tickets
              </button>
              
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full font-semibold flex items-center transition-all duration-200 transform hover:scale-105 shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Live
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;