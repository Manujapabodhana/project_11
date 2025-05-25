import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      {/* Top blue layer with utilities */}
      <div className="top-layer">
        <div className="container">
          <div className="utility-items">
            <div>
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
              <li>
                <Link to="/" className="nav-link">HOME</Link>
              </li>
              <li>
                <Link to="/international" className="nav-link">
                  INTERNATIONAL
                  <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/domestic" className="nav-link">
                  DOMESTIC
                  <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/news" className="nav-link">NEWS</Link>
              </li>
              <li>
                <Link to="/media" className="nav-link">
                  MEDIA
                  <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/coaching" className="nav-link">
                  COACHING
                  <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="nav-link">
                  GALLERY
                  <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  ABOUT US
                  <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
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