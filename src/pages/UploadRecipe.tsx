import React, { useRef, useState } from 'react';
import { addRecipeToLocalStorage, Recipe } from '../utils/localStorageUtils';
import { useNavigate } from 'react-router-dom';

const UploadRecipe: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<File[]>([]);
  const [formData, setFormData] = useState<Omit<Recipe, 'id'>>({
    recipeName: '',
    ingredients: '',
    procedure: '',
    caloryCount: '',
    nutritionValues: '',
    cuisine: '',
    dietary: '',
    mealType: '',
    difficulty: '',
    time: '',
    allergy: '',
    specialDiet: '',
    images: [],
    email: '', 
  });

  
  const [errors, setErrors] = useState<string[]>([]);

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files).slice(0, 5);
      setImages(selected);
      setFormData((prev) => ({
        ...prev,
        images: selected.map((file) => file.name),
      }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const requiredFields = ['recipeName', 'ingredients', 'procedure', 'caloryCount'];
    const missing = requiredFields.filter((field) => !formData[field as keyof typeof formData]);
    setErrors(missing);
    return missing.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const userEmail = localStorage.getItem('loggedInUserEmail') || '';
      const newRecipe: Recipe = {
        ...formData,
        id: Date.now(),
        email: userEmail, 
      };
      addRecipeToLocalStorage(newRecipe);
      alert('Recipe added successfully!');

      setImages([]);
      navigate('/');
    }
  };

  const renderDropdown = (
    label: string,
    name: keyof typeof formData,
    options: string[]
  ) => (
    <div className="upload-section">
      <label>{label}</label>
      <select
        name={name}
        className="text-input"
        value={formData[name]}
        onChange={handleInputChange}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="upload-container">
      <a href="/" className="back-link">← Back to home</a>
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="upload-section">
          <h2>Photo</h2>
          <div className="upload-box" onClick={handleUploadClick}>
            <button type="button" className="upload-button">Upload Photos</button>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <div style={{ marginTop: '1rem' }}>
              {images.map((file, idx) => (
                <div key={idx}>{file.name}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="upload-section">
          <label>Recipe Name *</label>
          <input
            className="text-input"
            type="text"
            name="recipeName"
            value={formData.recipeName}
            onChange={handleInputChange}
            placeholder="What do you call your recipe?"
          />
        </div>

        <div className="upload-section">
          <label>Ingredients *</label>
          <textarea
            className="textarea-input"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            placeholder="List your ingredients."
          />
        </div>

        <div className="upload-section">
          <label>Procedure *</label>
          <textarea
            className="textarea-input"
            name="procedure"
            value={formData.procedure}
            onChange={handleInputChange}
            placeholder="How do you cook your recipe?"
          />
        </div>

        <div className="upload-section">
          <label>Calory Count *</label>
          <input
            className="text-input"
            type="text"
            name="caloryCount"
            value={formData.caloryCount}
            onChange={handleInputChange}
            placeholder="What's your calory count?"
          />
        </div>

        <div className="upload-section">
          <label>Nutrition Values</label>
          <textarea
            className="textarea-input"
            name="nutritionValues"
            value={formData.nutritionValues}
            onChange={handleInputChange}
            placeholder="List your nutrition values"
          />
        </div>

        {renderDropdown('Cuisine', 'cuisine', ['Italian', 'Mexican', 'Chinese', 'Indian', 'Mediterranean', 'American', 'Continental', 'Other'])}
        {renderDropdown('Dietary Preference', 'dietary', ['Vegetarian', 'Non-Veg', 'Vegan', 'Gluten-Free', 'Keto', 'Low-Carb'])}
        {renderDropdown('Meal Type', 'mealType', ['Breakfast', 'Lunch', 'Snacks', 'Appetizers', 'Soups', 'Dinner', 'Desserts'])}
        {renderDropdown('Difficulty Level', 'difficulty', ['Easy', 'Intermediate', 'Hard'])}
        {renderDropdown('Cooking Time', 'time', ['Quick (Under 30 mins)', 'Moderate (30–60 mins)', 'Long (over 60 mins)'])}
        {renderDropdown('Allergies', 'allergy', ['Nuts', 'Dairy', 'Soy', 'Shellfish', 'Other'])}
        {renderDropdown('Special Diets', 'specialDiet', ['Diabetic-friendly', 'Weight loss', 'Heart-friendly'])}

        {errors.length > 0 && (
          <div style={{ color: 'red' }}>
            <p>Please fill in required fields:</p>
            <ul>
              {errors.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit" className="submit-button">Post Recipe</button>
      </form>

      <style>
        {`
          .upload-container {
            background-color: #ffffff;
            max-width: 700px;
            margin: 2rem auto;
            padding: 2rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }

          .back-link {
            text-decoration: none;
            color: #4f46e5;
            font-size: 0.9rem;
            display: inline-block;
            margin-bottom: 1.5rem;
            font-weight: bold;
          }

          .upload-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .upload-section {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .upload-box {
            border: 2px dashed #ccc;
            padding: 2rem;
            text-align: center;
            border-radius: 8px;
            background-color: #f9fafb;
            cursor: pointer;
            transition: border-color 0.3s ease;
          }

          .upload-box:hover {
            border-color: #4f46e5;
          }

          .upload-button {
            background-color: #6366f1;
            color: white;
            border: none;
            padding: 0.5rem 1.25rem;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .upload-button:hover {
            background-color: #4f46e5;
          }

          .text-input,
          .textarea-input,
          select {
            padding: 0.75rem;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 1rem;
            width: 100%;
            background-color: #fff;
            transition: border-color 0.3s ease;
          }

          .text-input:focus,
          .textarea-input:focus,
          select:focus {
            border-color: #4f46e5;
            outline: none;
          }

          .textarea-input {
            min-height: 120px;
            resize: vertical;
          }

          .submit-button {
            background-color: #facc15;
            color: black;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            cursor: pointer;
            align-self: flex-start;
            transition: background-color 0.3s ease;
          }

          .submit-button:hover {
            background-color: #eab308;
          }

          ul {
            margin: 0;
            padding-left: 1.5rem;
          }

          li {
            font-size: 0.9rem;
          }
        `}
      </style>
    </div>
  );
};

export default UploadRecipe;
