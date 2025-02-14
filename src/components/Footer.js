import React from 'react';
import { FaInstagram, FaTelegram, FaWhatsapp, FaTiktok, FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  // Inline style for the Footer
  const footerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '5px', // Minimized padding
    position: 'fixed',
    width: '100%',
    bottom: '0',
  };

  // Social media icons container style
  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px', // Reduced gap between icons
    marginTop: '5px', // Minimized margin
  };

  const iconStyle = {
    color: 'white',
    fontSize: '20px', // Slightly reduced icon size
    cursor: 'pointer',
    transition: 'color 0.3s',
  };

  return (
    <div style={footerStyle}>
      <p style={{ margin: '0' }}>&copy; 2025 All Rights Reserved</p>

      {/* Social Media Icons */}
      <div style={socialIconsStyle}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaInstagram />
        </a>
        <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaTelegram />
        </a>
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaWhatsapp />
        </a>
        <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaTiktok />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;