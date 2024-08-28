// src/__tests__/FavoritesList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { useRecipeStore } from '../recipeStore';
import FavoritesList from '../components/FavoritesList';
import RecipeList from '../components/RecipeList';

test('adds and removes favorites', () => {
  render(<RecipeList />);
  render(<FavoritesList />);

  const addButton = screen.getByText('Add to Favorites');
  fireEvent.click(addButton);

  const removeButton = screen.getByText('Remove from Favorites');
  expect(removeButton).toBeInTheDocument();

  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
