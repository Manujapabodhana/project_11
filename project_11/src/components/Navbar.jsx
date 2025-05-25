import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: 'HOME', path: '/' },
    {
      name: 'INTERNATIONAL',
      path: '/international',
      submenu: [
        'Men\'s Cricket',
        'Women\'s Cricket',
        'U19 Cricket',
        'Rankings'
      ]
    },
    {
      name: 'DOMESTIC',
      path: '/domestic',
      submenu: [
        'Major Club',
        'Premier Trophy',
        'Premier Limited Over',
        'First Class'
      ]
    },
    { name: 'NEWS', path: '/news' },
    {
      name: 'MEDIA',
      path: '/media',
      submenu: [
        'Photos',
        'Videos',
        'Press Releases'
      ]
    },
    {
      name: 'COACHING',
      path: '/coaching',
      submenu: [
        'Level 1',
        'Level 2',
        'Level 3',
        'High Performance'
      ]
    },
    {
      name: 'GALLERY',
      path: '/gallery',
      submenu: [
        'Match Gallery',
        'Event Gallery',
        'Historic Moments'
      ]
    },
    {
      name: 'ABOUT US',
      path: '/about',
      submenu: [
        'Overview',
        'Executive Committee',
        'Contact Us'
      ]
    }
  ];

  return (
    <header className="header">
      {/* Top blue layer with utilities */}
      <div className="top-layer">
        <div className="container">
          <div className="utility-items">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
            <button className="btn btn-tickets">
              Buy Tickets
            </button>
            <button className="btn btn-live">
              Live
              <span className="live-dot"></span>
            </button>
            <button className="btn btn-language">සිංහල</button>
          </div>
        </div>
      </div>

      {/* Logo positioned between layers */}
      <div className="logo-container">
        <Link to="/">
          <img 
            src="/logo.png" 
            alt="Sri Lanka Cricket" 
            className="logo"
          />
        </Link>
      </div>

      {/* Bottom white navigation layer */}
      <nav className="nav">
        <div className="container">
          <div className="nav-container">
            <ul className="nav-menu">
              {menuItems.map((item, index) => (
                <li key={index} 
                    className="nav-item"
                    onMouseEnter={() => item.submenu && setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={item.path} className="nav-link">
                    {item.name}
                    {item.submenu && (
                      <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                  {item.submenu && activeDropdown === index && (
                    <ul className="submenu">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={`${item.path}/${subItem.toLowerCase().replace(/\s+/g, '-')}`} className="submenu-link">
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Blue diagonal shape */}
        <div className="diagonal-shape"></div>
      </nav>
    </header>
  );
};

export default Navbar; 