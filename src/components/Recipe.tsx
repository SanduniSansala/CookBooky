import React from 'react';
import pastaImage from '../assets/10.jpg'; 

const Recipe: React.FC = () => {
  return (
    <>
      <style>
        {`
          .recipe-container {
            max-width: 900px;
            margin: 2rem auto;
            font-family: sans-serif;
            padding: 1rem;
            background-color: #fff;
            color: #333;
          }

          .recipe-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .recipe-header h1 {
            font-size: 2rem;
            margin: 0;
          }

          .rating {
            color: #facc15;
            font-size: 1.2rem;
            margin-top: 0.25rem;
          }

          .recipe-meta {
            display: flex;
            gap: 2rem;
            margin: 1.5rem 0;
          }

          .meta-item {
            text-align: center;
          }

          .meta-item h3 {
            margin: 0;
            font-size: 1.5rem;
            color: #000;
          }

          .meta-item p {
            margin: 0;
            font-size: 0.9rem;
            color: #666;
          }

          .nutrition {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;
          }

          .nutrient {
            background: #f7e1c2;
            color: #000;
            font-weight: bold;
            padding: 0.75rem 1rem;
            border-radius: 50%;
            text-align: center;
            width: 60px;
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 0.8rem;
          }

          .section-title {
            background-color: #facc15;
            padding: 0.5rem 1rem;
            font-weight: bold;
            margin-top: 2rem;
            margin-bottom: 1rem;
            display: inline-block;
            font-size: 1rem;
          }

          ul {
            padding-left: 1.5rem;
          }

          li {
            margin-bottom: 0.5rem;
          }

          .procedure ol {
            padding-left: 1.5rem;
          }

          .procedure li {
            margin-bottom: 1rem;
            line-height: 1.6;
          }

          .recipe-image {
            width: 100%;
            height: 200px;        
            object-fit: cover;     
            border-radius: 10px;   
            }
        `}
      </style>

      <div className="recipe-container">
        <div className="recipe-header">
          <div>
            <h1>CHICKEN PASTA</h1>
            <div className="rating">★★★★☆ (146)</div>
            <div className="recipe-meta">
              <div className="meta-item">
                <h3>8</h3>
                <p>Ingredients</p>
              </div>
              <div className="meta-item">
                <h3>15</h3>
                <p>Minutes</p>
              </div>
              <div className="meta-item">
                <h3>720</h3>
                <p>Calories</p>
              </div>
            </div>
          </div>
          <img src={pastaImage} alt="Chicken Pasta" className="recipe-image" />
        </div>

        <div className="nutrition">
          <div className="nutrient">45g<br />Protein</div>
          <div className="nutrient">50g<br />Carbs</div>
          <div className="nutrient">40g<br />Fats</div>
          <div className="nutrient">2g<br />Sugar</div>
          <div className="nutrient">3g<br />Fiber</div>
        </div>

        <div>
          <div className="section-title">INGREDIENTS</div>
          <ul>
            <li>225g fettuccine or any pasta of your choice</li>
            <li>450g boneless, skinless chicken breasts, cut into bite-sized pieces</li>
            <li>Salt</li>
            <li>Black pepper</li>
            <li>2 tablespoons olive oil</li>
            <li>3 cloves garlic, minced</li>
            <li>240ml heavy cream</li>
            <li>100g grated parmesan cheese</li>
            <li>Fresh parsley, chopped (for garnish)</li>
            <li>Tomato, chopped (for garnish)</li>
          </ul>
        </div>

        <div className="procedure">
          <div className="section-title">PROCEDURE</div>
          <ol>
            <li>
              <strong>Cook the Pasta:</strong><br />
              Cook the pasta according to the package instructions. Drain and set aside.
            </li>
            <li>
              <strong>Cook the Chicken:</strong><br />
              Season chicken pieces with salt and pepper.<br />
              In a pan, heat olive oil over medium heat.<br />
              Add chicken and cook until browned and fully cooked. Set aside.
            </li>
            <li>
              <strong>Make the Alfredo Sauce:</strong><br />
              In the same pan, add minced garlic and sauté for 1 minute.<br />
              Pour in the heavy cream and bring to a gentle simmer.<br />
              Stir in Parmesan cheese until melted and the sauce is smooth.
            </li>
            <li>
              <strong>Combine and Serve:</strong><br />
              Add the cooked chicken to the sauce.<br />
              Toss in the cooked pasta until well coated.<br />
              Garnish with chopped parsley.
            </li>
            <li>
              Enjoy your quick and tasty Easy Chicken Alfredo Pasta!
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Recipe;
