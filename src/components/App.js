import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';

// App Component
const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

// Home Component
const Home = () => (
  <div style={homeStyle}>
    {/* Left Side - Image Card */}
    <div style={imageCardStyle}>
      <img 
        src="C:\Users\p\Music\IMG_20240106_234117.jpg" // Replace with your image URL
        alt="Person"
        style={imageStyle}
      />
    </div>

    {/* Right Side - Information */}
    <div style={infoStyle}>
      <h2>Welcome to My Website</h2>
      <p>Hi, I'm  a passionate software developer and tech enthusiast.</p>
      <p>
        I specialize in full-stack development and have experience working with 
        a variety of technologies such as React, Node.js, PHP, and more. 
        My goal is to build scalable, user-friendly applications that solve real-world problems.
      </p>
      <p>
        On this website, you'll find my portfolio, including details about my past experiences, skills, 
        and contact information. Please navigate through the sections using the menu above.
      </p>
    </div>
  </div>
);

// Styles
const homeStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
};

const imageCardStyle = {
  flex: '0 0 40%', // Take up 40% of the width
  textAlign: 'center',
};

const imageStyle = {
  width: '150px', // Width of the image
  height: '150px',
  borderRadius: '50%', // Circular image
  objectFit: 'cover',
};

const infoStyle = {
  flex: '1', // Take up the remaining space
  marginLeft: '20px',
};

export default App;
