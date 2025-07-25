import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p><strong>Time:</strong> {recipe.time} mins</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
