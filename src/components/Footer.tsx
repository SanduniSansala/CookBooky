import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #f2f2f2;
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            font-family: sans-serif;
          }

          .footer-section {
            flex: 1;
            min-width: 250px;
            margin: 1rem;
          }

          .footer h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .footer a {
            display: block;
            color: black;
            text-decoration: none;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
          }

          .footer a:hover {
            text-decoration: underline;
          }

          .social-icons {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            flex: 1;
            min-width: 250px;
            margin-top: 1rem;
          }

          .social-icons a {
            margin-right: 1rem;
            display: inline-block;
          }

          .social-icons img {
            width: 32px;
            height: 32px;
          }

          
        `}
      </style>

      <footer className="footer">
        {/* About Us */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Our mission at CookBooky is to make everyday cooking fun, because we believe that cooking is key to a happier and healthier life for people, communities and the planet. We empower homecooks all over the world to help each other by sharing recipes and cooking tips.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              style={{ height: '40px', marginRight: '1rem' }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              style={{ height: '40px' }}
            />
          </div>
        </div>

        {/* Learn More */}
        <div className="footer-section">
          <h3>Learn More</h3>
          <a href="#">CookBook Community</a>
          <a href="#">Feedback</a>
          <a href="#">Blog</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>

          {/* Social Icons (aligned as part of Learn More) */}
        <div className="social-icons">
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" /></a>
          <a href="#"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" /></a>
          <a href="#"><img src="https://img.icons8.com/color/48/000000/pinterest--v1.png" alt="Pinterest" /></a>
          <a href="#"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" /></a>
          </div>
        </div>
      </footer>

      
    </>
  );
};

export default Footer;
