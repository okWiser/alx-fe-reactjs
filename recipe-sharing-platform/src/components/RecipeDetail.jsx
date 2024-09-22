import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json'; // Adjust the path as needed

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      try {
        const recipeData = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(recipeData);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg mb-4" />
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
        <ul className="list-disc space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-2xl font-bold mb-2">Instructions</h2>
        <ol className="list-decimal space-y-2">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
