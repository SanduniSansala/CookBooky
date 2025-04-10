import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/7.jpg'; // Your background image

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      alert("No user found. Please sign up.");
      return;
    }

    const user = JSON.parse(storedUser);
    if (email === user.email && password === user.password) {
      alert("Login successful!");
      navigate('/');
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="form-side">
        <h2>LOG IN</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button className="main-btn" onClick={handleLogin}>LOGIN</button>

        <p className="toggle-link" onClick={() => navigate('/signup')}>Sign up</p>
      </div>

      <div className="image-side" style={{ backgroundImage: `url(${bgImage})` }}></div>

      <style>
        {`
        .auth-container {
          display: flex;
          height: 100vh;
          font-family: sans-serif;
        }

        .form-side {
          flex: 1;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: white; /* White background for the login form */
          color: black;
        }

        .form-side h2 {
          margin-bottom: 1rem;
        }

        input[type="email"],
        input[type="password"] {
          padding: 0.75rem;
          margin-bottom: 1rem;
          border-radius: 5px;
          border: 1px solid #ccc;
          background: #f5f5f5;
          font-size: 1rem;
        }

        .main-btn {
          background-color: #efc75e;
          border: none;
          padding: 0.75rem;
          font-weight: bold;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
        }

        .toggle-link {
          text-align: center;
          font-size: 0.9rem;
          cursor: pointer;
          color: #facc15;
        }

        .toggle-link:hover {
          text-decoration: underline;
        }

        .image-side {
          flex: 1;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        `}
      </style>
    </div>
  );
};

export default Login;
