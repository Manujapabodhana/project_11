import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/international/*" element={<div>International</div>} />
            <Route path="/domestic/*" element={<div>Domestic</div>} />
            <Route path="/news/*" element={<div>News</div>} />
            <Route path="/media/*" element={<div>Media</div>} />
            <Route path="/coaching/*" element={<div>Coaching</div>} />
            <Route path="/gallery/*" element={<div>Gallery</div>} />
            <Route path="/about/*" element={<div>About Us</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;