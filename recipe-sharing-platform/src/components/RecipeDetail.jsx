<div className="bg-white p-4 rounded-lg shadow-md mt-4">
  <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
  <ol className="list-decimal pl-5">
    {recipe.instructions?.map((step, idx) => (
      <li key={idx}>{step}</li>
    ))}
  </ol>
</div>
