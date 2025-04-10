import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <Link to="/edit-profile" className="edit-link">Edit Profile</Link>
      <style>
        {`
          .profile-container {
            padding: 2rem;
            background-color: white;
            color: black;
            width: 300px;
            margin: 0 auto;
            text-align: center;
          }

          .edit-link {
            margin-top: 1rem;
            display: inline-block;
            color: #efc75e;
            font-size: 1rem;
          }

          .edit-link:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
