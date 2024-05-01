import React from "react";
import "./footer.css";

const Footer = () => {
  // Function to prevent default action of anchor tag
  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li><button className="footer-button"><i className="fas fa-book"></i> Terms of Use</button></li>
              <li><button className="footer-button-secondary"><i className="fas fa-user-secret"></i> Privacy Policy</button></li>
              <li><button className="footer-button-tertiary"><i className="fas fa-blog"></i> Blog</button></li>
              <li><button className="footer-button-outline"><i className="fas fa-question-circle"></i> FAQ</button></li>
              <li><button className="footer-button-accent"><i className="fas fa-list"></i> Watch List</button></li>
            </ul>
            <p>
              © 2024 VISIONNET. All Rights Reserved. All original content and materials featured on this website, including but not limited to articles, images, videos, and designs, are the exclusive property of VisionNet Media. Unauthorized reproduction, distribution, or modification of any content herein is strictly prohibited. All trademarks, logos, and brand names depicted herein are the property of VisionNet Media. Any unauthorized use of these trademarks is expressly prohibited and may violate copyright laws.
            </p>
          </div>
          <div className='box'>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="/" onClick={preventDefault} className="social-icon"><i className='fab fa-facebook-f'></i></a>
              <a href="/" onClick={preventDefault} className="social-icon"><i className='fab fa-twitter'></i></a>
              <a href="/" onClick={preventDefault} className="social-icon"><i className='fab fa-github'></i></a>
              <a href="/" onClick={preventDefault} className="social-icon"><i className='fab fa-instagram'></i></a>
            </div>
          </div>
          <div className='box'>
            <h3>Streamit App</h3>
            <div className='img flexSB'>
              <a href="/" onClick={preventDefault} className="app-link">
                <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' alt='App Store'/>
                <span>App Store</span>
              </a>
              <a href="/" onClick={preventDefault} className="app-link">
                <img src='https://img.icons8.com/fluency/48/000000/google-play.png' alt='Google Play Store'/>
                <span>Google Play Store</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;