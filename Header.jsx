import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registerFormVisible, setRegisterFormVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    if (!isLoggedIn) {
      setRegisterFormVisible(true); // Show the registration form
    } else {
      // Handle normal login logic
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Here you can handle registration logic, for now, we'll just log the username and password
    console.log("Username:", username);
    console.log("Password:", password);
    setIsLoggedIn(true); // Set user as logged in
    setRegisterFormVisible(false); // Hide the registration form
  };

  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='https://i.pinimg.com/564x/04/6a/1d/046a1d6d4741a1d73f5e7b5bd8fa223f.jpg' alt='Cinema Neon Sign' />
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/' onClick={handleLoginClick}>
                  {isLoggedIn ? "Login" : "Register"}
                </a>
              </li>
              {/* Add additional menu items */}
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Series</a></li>
              <li><a href='/'>Movies</a></li>
              <li><a href='/'>Pages</a></li>
              <li><a href='/'>Pricing</a></li>
              <li><a href='/'>Contact</a></li>
              <li><a href='/'>About</a></li>
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

      {/* Register form */}
      {registerFormVisible && (
        <div className="registration-form">
          <h2>Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Header;