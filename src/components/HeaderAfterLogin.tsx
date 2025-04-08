import React from 'react';

const HeaderAfterLogin: React.FC = () => {
  return (
    <>
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

          .profile-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
      </style>

      <header className="header">
        <div className="logo">CooKBooKY</div>
        <div>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"
            alt="Profile"
            className="profile-icon"
          />
        </div>
      </header>
    </>
  );
};

export default HeaderAfterLogin;
