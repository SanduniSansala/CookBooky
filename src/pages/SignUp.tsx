import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/7.jpg'; // ✅ Image එක import කරලා තියනවා

const SignUp:React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="form-side">
        <h2>SIGN UP</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <div className="options-row">
          <label>
            <input type="checkbox" /> Remember Me?
          </label>
          <span className="forgot">Forgot Password</span>
        </div>

        <button className="main-btn">SIGN UP</button>

        <div className="divider">
          <hr />
          <span>or</span>
          <hr />
        </div>

        <div className="social-login">
          <button className="icon-btn">🔵</button>
          <button className="icon-btn">⚫</button>
        </div>

        <p className="toggle-link" onClick={() => navigate('/login')}>
          Login
        </p>
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

        .options-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          margin-bottom: 1rem;
        }

        .forgot {
          cursor: pointer;
          color: gray;
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

        .divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
        }

        .divider hr {
          flex: 1;
          height: 1px;
          background-color: #ccc;
          border: none;
        }

        .divider span {
          margin: 0 1rem;
          font-size: 0.8rem;
        }

        .social-login {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .icon-btn {
          font-size: 1.5rem;
          background: none;
          border: none;
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
      `}
      </style>
    </div>
  );
};

export default SignUp;
