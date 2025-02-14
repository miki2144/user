import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    backgroundColor: darkMode ? '#333' : '#282c34',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '16px', // Minimized font size
  };

  const menuStyle = {
    display: menuOpen ? 'block' : 'none',
    position: 'absolute',
    top: '60px',
    left: '0',
    width: '100%',
    backgroundColor: darkMode ? '#333' : '#282c34',
    textAlign: 'center',
    padding: '10px',
    zIndex: '1000',
  };

  const hamburgerStyle = {
    cursor: 'pointer',
    fontSize: '30px',
    display: windowWidth <= 768 ? 'block' : 'none',
  };

  const navLinksStyle = {
    display: windowWidth > 768 ? 'flex' : 'none',
  };

  return (
    <div style={navStyle}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h1 style={{ margin: 0 }}>Muller</h1>
      </Link>
      <div className="nav-links" style={navLinksStyle}>
        <Link to="/" style={linkStyle}><h2 style={{ margin: 0 }}>Home</h2></Link>
        <Link to="/about" style={linkStyle}><h2 style={{ margin: 0 }}>About</h2></Link>
        <Link to="/experience" style={linkStyle}><h2 style={{ margin: 0 }}>Experience</h2></Link>
        <Link to="/contact" style={linkStyle}><h2 style={{ margin: 0 }}>Contact</h2></Link>
      </div>
      <div
        className="hamburger"
        style={hamburgerStyle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>
      <div style={menuStyle}>
        <Link to="/" style={linkStyle} onClick={() => setMenuOpen(false)}><h2 style={{ margin: 0 }}>Home</h2></Link>
        <Link to="/about" style={linkStyle} onClick={() => setMenuOpen(false)}><h2 style={{ margin: 0 }}>About</h2></Link>
        <Link to="/experience" style={linkStyle} onClick={() => setMenuOpen(false)}><h2 style={{ margin: 0 }}>Experience</h2></Link>
        <Link to="/contact" style={linkStyle} onClick={() => setMenuOpen(false)}><h2 style={{ margin: 0 }}>Contact</h2></Link>
      </div>

      {/* Dark Mode Toggle with Icons */}
      <button
        onClick={toggleDarkMode}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          color: darkMode ? '#C0C0C0' : '#ADD8E6',
        }}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </div>
  );
};

export default Nav;