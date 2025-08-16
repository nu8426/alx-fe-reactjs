import React, { useState, useEffect } from 'react';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div>
      <h1>Recipe Sharing Platform</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
