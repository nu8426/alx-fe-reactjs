import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore'; // or ../store/recipeStore

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 && <p>No matching recipes found.</p>}
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};




export default RecipeList; 
