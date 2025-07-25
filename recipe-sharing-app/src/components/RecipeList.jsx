import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
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
            {/* ✅ Make title a clickable Link */}
            <h3>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#2c3e50' }}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
            <p><strong>Time:</strong> {recipe.time} mins</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
