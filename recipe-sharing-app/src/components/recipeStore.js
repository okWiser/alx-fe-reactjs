import create from 'zustand'
import useRecipeStore from './recipeStore';


const useRecipeStore = create((set) => ({
  recipes: [], 

  addRecipe: (newRecipe) => {
    set((state) => ({ recipes: [...state.recipes, newRecipe] }));
  },

  deleteRecipe: (recipeId) => {
    set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== recipeId) }));
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    }));
  },
}));

export default useRecipeStore;
// In this snippet, we have a custom hook called useRecipeStore that uses the create function from Zustand to create a store. The store has three pieces of state: recipes, addRecipe, deleteRecipe, and updateRecipe. The recipes state is initialized as an empty array. The addRecipe function takes a new recipe and adds it to the recipes array. The deleteRecipe function takes a recipe ID and removes the recipe with that ID from the recipes array. The updateRecipe function takes an updated recipe and updates the recipe with the same ID in the recipes array. Finally, the useRecipeStore hook is exported as the default export. This hook can be used in other components to access and update the recipes state.// In this snippet, we have a custom hook called useRecipeStore that uses the create function from Zustand to create a store. The store has three pieces of state: recipes, addRecipe, deleteRecipe, and updateRecipe. The recipes state is initialized as an empty array. The addRecipe function takes a new recipe and adds it to the recipes array. The deleteRecipe function takes a recipe ID and removes the recipe with that ID from the recipes array. The updateRecipe function takes an updated recipe and updates the recipe with the same ID in the recipes array. Finally, the useRecipeStore hook is exported as the default export. This hook can be used in other components to access and update the recipes state.// In this snippet, we have a custom hook called useRecipeStore that uses the create function from Zustand to create a store. The store has three pieces of state: recipes, addRecipe, deleteRecipe, and updateRecipe. The recipes state is initialized as an empty array. The addRecipe function takes a new recipe and adds it to the recipes array. The deleteRecipe function takes a recipe ID and removes the recipe with that ID from the recipes array. The updateRecipe function takes an updated recipe and updates the recipe with the same ID in the recipes array. Finally, the useRecipeStore hook is exported as the default export. This hook can be used in other components to access and update the recipes state.// In this snippet, we have a custom hook called useRecipeStore that uses the create function from Zustand to create a store. The store has three pieces of state: recipes, addRecipe, deleteRecipe, and updateRecipe. The recipes state is initialized as an empty array. The addRecipe function takes a new recipe and adds