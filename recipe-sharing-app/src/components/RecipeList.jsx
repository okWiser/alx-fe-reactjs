import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { recipes, addFavorite } = useRecipeStore((state) => ({
    recipes: state.recipes,
    addFavorite: state.addFavorite,
  }));

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
