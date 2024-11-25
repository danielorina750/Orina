import React from 'react';
import './mainPage.css';  // Import the CSS file for the MainPage styles

const MainPage = () => {
  return (
    <div className="mainpage-container">
      <div className="mainpage-left">
        <img src="https://orientalnewsng.com/wp-content/uploads/2021/12/IMG-20211206-WA0023.jpg" alt="Description" className="mainpage-image" /> {/* Replace with your image */}
      </div>
      <div className="mainpage-right">
        <img src="https://th.bing.com/th/id/R.639a5b150b92bdf4d7690a9bdbfcb868?rik=%2bDQs%2f1Ekpej%2bcw&riu=http%3a%2f%2flogo-logos.com%2f2016%2f10%2fEcobank_logo.png&ehk=0BpDpbUL5fV%2bT%2bme4ftJZf1LBAE8lY6ZSDyj6sCfdZw%3d&risl=&pid=ImgRaw&r=0" alt="Logo" className="mainpage-logo" /> {/* Replace with your logo */}
        <h1 className="mainpage-heading">Welcome to Our Website</h1>
        <p className="mainpage-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia diam ut dui laoreet, eget
          auctor velit tincidunt. Nulla facilisi. Quisque euismod nisi eu felis auctor, at dictum mauris
          tincidunt.
        </p>
        <button className="cta-button">Begin Application</button>
      </div>
    </div>
  );
};

export default MainPage;
