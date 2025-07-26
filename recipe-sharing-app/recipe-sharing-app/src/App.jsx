import React from 'react';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeList from './components/RecipeList'; // Existing

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
