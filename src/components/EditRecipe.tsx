import React from 'react';
import { Link } from 'react-router-dom';
import { getRecipesFromLocalStorage } from '../utils/localStorageUtils';

const ViewRecipe: React.FC = () => {
  const recipes = getRecipesFromLocalStorage(); 

  return (
    <div className="view-container">
      <h1>Saved Recipes</h1>
      <div className="recipe-list">
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h2>{recipe.recipeName}</h2>
              <Link to={`/edit-recipe/${recipe.id}`}>Edit Recipe</Link>  {}
            </div>
          ))
        )}
      </div>

      <style>
        {`
          .view-container {
            max-width: 1000px;
            margin: 2rem auto;
            padding: 1rem;
            font-family: sans-serif;
          }

          h1 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .recipe-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);  
            gap: 20px;  
            margin-top: 2rem;
          }

          .recipe-card {
            background-color: #f9f9f9;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .recipe-card h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .recipe-card a {
            display: inline-block;
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background-color: #4CAF50;
            color: white;
            border-radius: 5px;
            text-decoration: none;
          }

          .recipe-card a:hover {
            background-color: #45a049;
          }
        `}
      </style>
    </div>
  );
};

export default ViewRecipe;
