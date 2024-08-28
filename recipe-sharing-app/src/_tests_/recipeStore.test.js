// src/__tests__/recipeStore.test.js
import { act } from 'react-dom/test-utils';
import create from 'zustand';
import useRecipeStore from '../recipeStore';

describe('Recipe Store', () => {
  let store;

  beforeEach(() => {
    store = create(useRecipeStore);
  });

  it('should add a recipe to favorites', () => {
    const recipe = { id: 1, title: 'Test Recipe' };
    act(() => {
      store.getState().addRecipe(recipe);
      store.getState().addFavorite(recipe.id);
    });
    expect(store.getState().favorites).toContain(recipe);
  });

  it('should remove a recipe from favorites', () => {
    const recipe = { id: 1, title: 'Test Recipe' };
    act(() => {
      store.getState().addRecipe(recipe);
      store.getState().addFavorite(recipe.id);
      store.getState().removeFavorite(recipe.id);
    });
    expect(store.getState().favorites).not.toContain(recipe);
  });
});
