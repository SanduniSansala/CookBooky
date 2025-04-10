import React from 'react';
import pancake from '../assets/10.jpg';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home: React.FC = () => {
  const navigate = useNavigate();

  
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  const handleSearchClick = () => {
    navigate('/ViewAllRecipe');
  };

  const handleAddRecipeClick = () => {
    if (!isLoggedIn) {
      
      navigate('/login');
    } else {
      
      navigate('/UploadRecipe');
    }
  };

  return (
    <>
      <style>
        {`
          .home-container {
            position: relative;
            min-height: 100vh;
            background-color: black;
            color: white;
            overflow: hidden;
            font-family: sans-serif;
          }

          .background-image {
            position: absolute;
            width: 100vw;
            height: auto;
            max-height: 100vh;
            object-fit: cover;
            opacity: 0.5;
            top: 0;
            left: 0;
            z-index: 0;
            filter: brightness(0.8);
          }

          .overlay-content {
            position: relative;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2rem;
          }

          .search-bar {
            display: flex;
            align-items: center;
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
            position: relative;
          }

          .search-input {
            flex: 1;
            padding: 0.75rem 2.5rem 0.75rem 1rem;
            border-radius: 9999px;
            border: none;
            outline: none;
            color: black;
            font-size: 1rem;
          }

          .search-icon {
            position: absolute;
            right: 1rem;
            width: 20px;
            height: 20px;
            cursor: pointer;
          }

          .add-recipe-container {
            text-align: left;
          }

          .add-recipe-text {
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
            padding-top: 20.5rem;
          }

          .add-recipe-button {
            background-color: #facc15;
            color: black;
            font-weight: bold;
            border: none;
            border-radius: 9999px;
            padding: 0.5rem 1.5rem;
            cursor: pointer;
            font-size: 1rem;
          }
        `}
      </style>

      <Header />
      <div className="home-container">
        <img src={pancake} alt="Pancakes" className="background-image" />

        <div className="overlay-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for recipes"
              className="search-input"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
              alt="Search Icon"
              className="search-icon"
              onClick={handleSearchClick}
            />
          </div>

          <div className="add-recipe-container">
            <div className="add-recipe-text">Click here to add new recipe</div>
            <button className="add-recipe-button" onClick={handleAddRecipeClick}>
              ADD RECIPE
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
