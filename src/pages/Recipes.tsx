import React from 'react';
import image1 from '../assets/9.jpg'; 
import image2 from '../assets/10.jpg'; 

const recipes = [
    {
        id: 1,
        name: 'Chicken Pasta',
        image: image1, // Set this image here
        rating: 4,
        description: 'A delicious chicken pasta recipe.',
      },
      {
        id: 2,
        name: 'Raspberry Pastry',
        image: image2, // Set this image here too
        rating: 5,
        description: 'A sweet and tangy raspberry pastry.',
      },
  // Add more recipes here...
];

const Recipes: React.FC = () => {
  return (
    <>
      <style>
        {`
          .recipe-page {
            display: flex;
            min-height: 100vh;
            font-family: sans-serif;
            background-color: #f9f9f9;
          }

          .sidebar {
            width: 250px;
            padding: 20px;
            background: #fff;
            border-right: 1px solid #ddd;
          }

          .sidebar h2 {
            margin-bottom: 20px;
            font-size: 18px;
          }

          .filter-group {
            margin-bottom: 20px;
          }

          .filter-group h4 {
            margin-bottom: 8px;
            font-size: 16px;
          }

          .filter-group label {
            display: block;
            margin-bottom: 4px;
            font-size: 14px;
          }

          .main-content {
            flex: 1;
            padding: 20px;
          }

          .recipe-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
          }

          .recipe-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.2s;
          }

          .recipe-card:hover {
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
          }

          .recipe-card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
          }

          .card-info {
            padding: 10px;
          }

          .card-info h3 {
            font-size: 16px;
            margin: 0 0 5px;
          }

          .rating {
            color: #facc15;
            font-size: 14px;
          }

          .pagination {
            display: flex;
            gap: 10px;
            margin-top: 30px;
            justify-content: center;
            align-items: center;
          }

          .pagination button {
            background: #eee;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
          }

          .pagination button:hover {
            background: #ddd;
          }

          .pagination span {
            font-size: 18px;
          }
        `}
      </style>

      <div className="recipe-page">
        <aside className="sidebar">
          <h2>Filters</h2>

          <div className="filter-group">
            <h4>Cuisine</h4>
            <label><input type="checkbox" /> Italian</label>
            <label><input type="checkbox" /> Mexican</label>
            <label><input type="checkbox" /> Chinese</label>
            <label><input type="checkbox" /> Indian</label>
          </div>

          <div className="filter-group">
            <h4>Dietary Preference</h4>
            <label><input type="checkbox" /> Vegetarian</label>
            <label><input type="checkbox" /> Vegan</label>
            <label><input type="checkbox" /> Gluten-Free</label>
          </div>
        </aside>

        <main className="main-content">
          <div className="recipe-grid">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.name} />
                <div className="card-info">
                  <h3>{recipe.name}</h3>
                  <div className="rating">
                    {'★'.repeat(recipe.rating)}
                    {'☆'.repeat(5 - recipe.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>Next ›</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Recipes;
