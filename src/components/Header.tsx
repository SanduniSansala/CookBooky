import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderAfterLogin from './HeaderAfterLogin'; // Import HeaderAfterLogin

const Header: React.FC = () => {
  const navigate = useNavigate();


  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const isLoggedIn = localStorage.getItem('loggedIn') === 'true'; // Check if user is logged in

  return (
    <>
      {isLoggedIn ? (
        <HeaderAfterLogin /> // If logged in, show HeaderAfterLogin
      ) : (
        <header className="header">
          <div className="logo" onClick={handleLogoClick}>CooKBooKY</div>
          <div className="nav-buttons">
            <button className="nav-button" onClick={handleLogin}>Login</button>
            <button className="nav-button" onClick={handleSignup}>Sign up</button>
          </div>
        </header>
      )}

      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #111;
            padding: 1rem 2rem;
            color: white;
            font-family: sans-serif;
          }

          .logo {
            font-size: 1.5rem;
            font-weight: bold;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          .logo::after {
            content: '';
            display: inline-block;
            width: 50px;
            height: 5px;
            background: white;
            margin-left: 0.5rem;
            border-radius: 10px;
          }

          .nav-buttons {
            display: flex;
            gap: 1rem;
          }

          .nav-button {
            background-color: transparent;
            border: 1px solid white;
            color: white;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          .nav-button:hover {
            background-color: white;
            color: #111;
          }
        `}
      </style>
    </>
  );
};

export default Header;
