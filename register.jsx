import React, { useState } from "react";
import RegisterPage from "../components/RegisterPage"; // Import RegisterPage component
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login status

  // Function to toggle between Register and Login pages
  const handleLoginClick = () => {
    // If user is not logged in, show Register page
    if (!isLoggedIn) {
      // Navigate to RegisterPage or show Register component (depending on your routing setup)
      console.log("Navigate to RegisterPage or show Register component");
    } else {
      // If user is logged in, handle normal login logic here
      console.log("Handle normal login logic");
    }
  };

  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              {/* Insert the new logo source */}
              <img src='https://i.pinimg.com/564x/04/6a/1d/046a1d6d4741a1d73f5e7b5bd8fa223f.jpg' alt='Cinema Neon Sign' />
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/' onClick={handleLoginClick}>
                  {isLoggedIn ? "Login" : "Register"} {/* Toggle between Register and Login text */}
                </a>
              </li>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Series</a>
              </li>
              <li>
                <a href='/'>Movies</a>
              </li>
              <li>
                <a href='/'>Pages</a>
              </li>
              <li>
                <a href='/'>Pricing</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i className='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;