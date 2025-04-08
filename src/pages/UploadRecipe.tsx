import React, { useState, useRef } from 'react';

const UploadRecipe: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 5);
      setImages(selectedFiles);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="upload-container">
      <a href="/" className="back-link">← Back to home</a>
      <form className="upload-form">
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
          <label>Recipe Name</label>
          <input className="text-input" type="text" placeholder="What do you call your recipe?" />
        </div>

        <div className="upload-section">
          <label>Ingredients</label>
          <textarea className="textarea-input" placeholder="List your ingredients." />
        </div>

        <div className="upload-section">
          <label>Procedure</label>
          <textarea className="textarea-input" placeholder="How do you cook your recipe?" />
        </div>

        <div className="upload-section">
          <label>Calory Count</label>
          <input className="text-input" type="text" placeholder="What’s your calory count?" />
        </div>

        <div className="upload-section">
          <label>Nutrition Values</label>
          <textarea className="textarea-input" placeholder="List your nutrition values" />
        </div>

        <div className="upload-section">
          <label>Recipe Tags</label>
          <div className="tag-row">
            <input
              type="text"
              className="tag-input"
              placeholder="Tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
            <button type="button" className="tag-add" onClick={handleAddTag}>+</button>
          </div>
          <div className="tag-list">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">Post Recipe</button>
      </form>

      <style>
        {`
          body {
            background-color: #ffffff;
            margin: 0;
            padding: 0;
          }

          .upload-container {
            background-color: #ffffff;
            max-width: 700px;
            margin: 2rem auto;
            padding: 1rem;
            font-family: Arial, sans-serif;
          }

          .back-link {
            text-decoration: none;
            color: #4f46e5;
            font-size: 0.9rem;
            display: inline-block;
            margin-bottom: 1.5rem;
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
            border: 1px solid #ccc;
            padding: 2rem;
            text-align: center;
            border-radius: 5px;
            background-color: #fafafa;
            cursor: pointer;
          }

          .upload-button {
            background-color: #6366f1;
            color: white;
            border: none;
            padding: 0.5rem 1.25rem;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
          }

          .text-input,
          .textarea-input {
            padding: 0.75rem;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-style: italic;
            font-size: 1rem;
            width: 100%;
            background-color: white;
          }

          .textarea-input {
            min-height: 150px;
          }

          .tag-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .tag-input {
            padding: 0.5rem;
            border-radius: 4px;
            border: 1px solid #ccc;
            flex-grow: 1;
          }

          .tag-add {
            padding: 0.5rem 1rem;
            font-size: 1.25rem;
            cursor: pointer;
            background-color: transparent;
            border: none;
          }

          .tag-list {
            margin-top: 0.5rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .tag {
            background-color: #e0e7ff;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.85rem;
          }

          .submit-button {
            margin-top: 1rem;
            background-color: #facc15;
            color: black;
            font-weight: bold;
            border: none;
            border-radius: 6px;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            cursor: pointer;
            align-self: flex-start;
          }
        `}
      </style>
    </div>
  );
};

export default UploadRecipe;
