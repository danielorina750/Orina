import React from 'react';
import './StickyNavbar.css';  // Import the CSS file for the Sticky Navbar styles

const StickyNavbar = () => {
  return (
    <nav className="sticky-navbar">
      <div className="sticky-navbar-container">
        {/* Menu items centered */}
        <ul className="sticky-navbar-menu">
          <li className="sticky-navbar-menu-item"><a href="#">Onboarding</a></li>
          <li className="sticky-navbar-menu-item"><a href="#">Home</a></li>
          <li className="sticky-navbar-menu-item"><a href="#">Contact Pages</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default StickyNavbar;
