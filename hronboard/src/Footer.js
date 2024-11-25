import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaDiscord } from 'react-icons/fa';  // Import icons

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/onboarding">Onboarding</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
        </div>
        <div className="footer-logo">
          <img src="https://th.bing.com/th/id/R.639a5b150b92bdf4d7690a9bdbfcb868?rik=%2bDQs%2f1Ekpej%2bcw&riu=http%3a%2f%2flogo-logos.com%2f2016%2f10%2fEcobank_logo.png&ehk=0BpDpbUL5fV%2bT%2bme4ftJZf1LBAE8lY6ZSDyj6sCfdZw%3d&risl=&pid=ImgRaw&r=0" alt="Ecobank Logo" />
        </div>
        <div className="footer-motto">
          <p>"The Pan African Bank"</p>
        </div>
      </div>

      <div className="footer-social">
        <ul>
          <li><a href="https://www.facebook.com/Ecobank" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
          <li><a href="https://www.linkedin.com/company/ecobank" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
          <li><a href="https://www.instagram.com/ecobankgroup" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          <li><a href="https://discord.com/invite/ecobank" target="_blank" rel="noopener noreferrer"><FaDiscord /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
