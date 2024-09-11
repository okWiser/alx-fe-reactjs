import React, { useState, useEffect } from 'react';


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
