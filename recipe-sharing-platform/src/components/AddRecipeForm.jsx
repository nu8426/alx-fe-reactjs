import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please add at least two ingredients.';
    }
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';
    return newErrors;
  };

  // ✅ Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log('New Recipe:', { title, ingredients, steps });

    // Clear form
    setTitle('');
    setIngredients('');
    setSteps('');
    alert('Recipe submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-10">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      
      {/* ✅ Tailwind styling: includes shadow and responsive padding */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
        {/* Title Field */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // ✅ target.value
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="e.g., Spaghetti Bolognese"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div>
          <label className="block font-medium mb-1">Ingredients (comma-separated)</label>
          <textarea
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)} // ✅ target.value
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="e.g., pasta, tomato sauce, ground beef"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps Field */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps</label>
          <textarea
            name="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)} // ✅ target.value
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Describe how to prepare the dish..."
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
