import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'web-series', label: 'Web Series' },
    { id: 'movies', label: 'Movies' },
    { id: 'imported', label: 'Imported' },
    { id: 'romance', label: 'Romance' },
    { id: 'comedy', label: 'Comedy' },
    { id: 'tamil', label: 'Tamil' },
    { id: 'telugu', label: 'Telugu' },
    { id: 'playground', label: 'Playground' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/placeholder.svg?height=30&width=100" alt="miniTV MX PLAYER" className="logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
             style={selectedLink === link.id ? {color:'skyblue'}:null}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-icons">
        <button className="search-icon">🔍</button>
        <button className="settings-icon">⚙️</button>
      </div>
    </nav>
  );
}