import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return ( 
    <BrowserRouter><div style={{ padding: '20px' }}>
      <h1><Link to="/">Recipe Sharing App</Link></h1>
      <Routes>
        <Route path="/" element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>
        } />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
