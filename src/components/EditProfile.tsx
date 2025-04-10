import React, { useState} from 'react';

const EditProfile: React.FC = () => {
  // Retrieve the current user's data from localStorage
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState(user?.password || '');

  const handleSave = () => {
    if (name && email && password) {
      const updatedUser = { name, email, password };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      alert("Profile updated successfully!");
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
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
      <button className="save-btn" onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditProfile;
