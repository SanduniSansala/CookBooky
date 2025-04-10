import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // import useNavigate for programmatic navigation

const HeaderAfterLogin: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user?.name || 'Guest'; // Default to 'Guest' if no name is found

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user data from localStorage
    localStorage.setItem('loggedIn', 'false'); // Mark the user as logged out

    navigate('/login'); // Redirect to the login page
  };

  const handleView = () => {
    navigate('/ViewRecipe'); // Redirect to the ViewRecipe page
  };

  return (
    <>
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: black;  /* Set background color to black */
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

          .profile-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }

          .profile-name {
            color: white;
            font-size: 1rem;
            font-weight: bold;
          }

          .profile-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
          }

          .logout-btn {
            background-color: #efc75e;
            border: none;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            border-radius: 5px;
            cursor: pointer;
            color: white;
            margin-left: 1rem; /* Space between profile section and logout button */
          }

          .profile-section {
            display: flex;
            align-items: center; 
            gap: 1rem; /* Space between profile icon and name */
          }
        `}
      </style>

      <header className="header">
        <div onClick={() => navigate("/")} className="logo">CooKBooKY</div>
        <div className="profile-section">
        <button className="nav-button" onClick={handleView}>View</button>
        <button className="nav-button" onClick={handleLogout}>Logout</button>
          <Link to="/profile">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"
              alt="Profile"
              className="profile-icon"
            />
          </Link>
          <span className="profile-name">{userName}</span>
          
        </div>
      </header>
    </>
  );
};

export default HeaderAfterLogin;
