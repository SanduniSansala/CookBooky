import React, { useEffect, useState } from 'react';
import { getRecipesFromLocalStorage, removeRecipeFromLocalStorage, Recipe } from '../utils/localStorageUtils';
import { Link } from 'react-router-dom';

const ViewRecipe: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const storedRecipes = getRecipesFromLocalStorage();
    setRecipes(storedRecipes);
  }, []);

  const handleDeleteRecipe = (id: number) => {
    removeRecipeFromLocalStorage(id); 
    setRecipes(recipes.filter(recipe => recipe.id !== id)); 
  };

  if (recipes.length === 0) return <p>No recipes found in local storage.</p>;

  return (
    <div>
      <div className="view-container">
        <h1>Saved Recipes</h1>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-header">
              <h2>{recipe.recipeName}</h2>
              <span className="recipe-info">Calories: {recipe.caloryCount}</span>
            </div>
            <div className="recipe-body">
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Procedure:</strong> {recipe.procedure}</p>
              <p><strong>Nutrition:</strong> {recipe.nutritionValues}</p>

              <h4>Filters:</h4>
              <ul>
                <li><strong>Cuisine:</strong> {recipe.cuisine}</li>
                <li><strong>Dietary:</strong> {recipe.dietary}</li>
                <li><strong>Meal Type:</strong> {recipe.mealType}</li>
                <li><strong>Difficulty:</strong> {recipe.difficulty}</li>
                <li><strong>Time:</strong> {recipe.time}</li>
                <li><strong>Allergy:</strong> {recipe.allergy}</li>
                <li><strong>Special Diet:</strong> {recipe.specialDiet}</li>
                
              </ul>
            </div>

            <div className="recipe-footer">
              <Link to={`/edit-recipe/${recipe.id}`} className="edit-button">Edit</Link>
              <button onClick={() => handleDeleteRecipe(recipe.id)} className="delete-button">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .view-container {
            max-width: 900px;
            margin: 2rem auto;
            padding: 1rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f7fafc;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          h1 {
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 2rem;
            color: #4f46e5;
          }

          .recipe-card {
            background-color: #fff;
            padding: 2rem;
            margin-bottom: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .recipe-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }

          .recipe-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .recipe-header h2 {
            font-size: 1.8rem;
            font-weight: 600;
            color: #333;
            margin: 0;
          }

          .recipe-info {
            font-size: 1rem;
            color: #4caf50;
            font-weight: bold;
          }

          .recipe-body {
            margin-bottom: 1.5rem;
          }

          .recipe-body p {
            font-size: 1.1rem;
            color: #555;
          }

          .recipe-body h4 {
            margin-top: 1.5rem;
            font-size: 1.3rem;
            color: #333;
          }

          ul {
            list-style-type: none;
            padding-left: 0;
            margin-top: 1rem;
          }

          ul li {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 0.5rem;
          }

          ul li strong {
            font-weight: bold;
          }

          .recipe-footer {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
          }

          .edit-button {
            padding: 0.8rem 1.5rem;
            font-size: 1.1rem;
            font-weight: bold;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            text-decoration: none;
            transition: background-color 0.3s;
          }

          .edit-button:hover {
            background-color: #45a049;
          }

          .delete-button {
            padding: 0.8rem 1.5rem;
            font-size: 1.1rem;
            font-weight: bold;
            background-color: #ef4444;
            color: #fff;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .delete-button:hover {
            background-color: #dc2626;
          }
        `}
      </style>
    </div>
  );
};

export default ViewRecipe;
