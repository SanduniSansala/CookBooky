import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/7.jpg'; 

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const validateEmail = (email: string) => {
    
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSignUp = () => {
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('loggedIn', 'true'); 
    alert("Signup successful!");
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="form-side">
        <h2>SIGN UP</h2>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        {error && <p className="error-message">{error}</p>}

        <button className="main-btn" onClick={handleSignUp}>SIGN UP</button>

        <p className="toggle-link" onClick={() => navigate('/login')}>Login</p>
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
        }

        .form-side h2 {
          margin-bottom: 1rem;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
          padding: 0.75rem;
          margin-bottom: 1rem;
          border-radius: 5px;
          border: none;
          background: #e2e2e2;
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
        }

        .image-side {
          flex: 1;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }

        .error-message {
          color: red;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        `}
      </style>
    </div>
  );
};

export default SignUp;
