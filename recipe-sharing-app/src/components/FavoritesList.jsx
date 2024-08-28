import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { favorites, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    removeFavorite: state.removeFavorite,
  }));

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite recipes yet. Add some to see them here!</p>
      )}
    </div>
  );
};

export default FavoritesList;
