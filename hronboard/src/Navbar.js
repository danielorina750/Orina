import React from 'react';
import './Navbar.css';  // Import the CSS file for the Navbar styles

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="navbar-logo">
          <img src="https://th.bing.com/th/id/R.639a5b150b92bdf4d7690a9bdbfcb868?rik=%2bDQs%2f1Ekpej%2bcw&riu=http%3a%2f%2flogo-logos.com%2f2016%2f10%2fEcobank_logo.png&ehk=0BpDpbUL5fV%2bT%2bme4ftJZf1LBAE8lY6ZSDyj6sCfdZw%3d&risl=&pid=ImgRaw&r=0" alt="Logo" height="40" />
        </div>

        {/* Menu on the right */}
        <div className="navbar-menu">
          <ul className="navbar-menu-list">
            <li className="navbar-menu-item"><a href="#">Home</a></li>
            <li className="navbar-menu-item"><a href="#">About</a></li>
            <li className="navbar-menu-item"><a href="#">Services</a></li>
            <li className="navbar-menu-item"><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
