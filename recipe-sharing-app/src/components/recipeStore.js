import { create } from 'zustand';

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

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  favorites: [],

  addFavorite: (recipeId) => {
    set((state) => {
      const recipe = state.recipes.find((recipe) => recipe.id === recipeId);
      if (recipe && !state.favorites.includes(recipe)) {
        return { favorites: [...state.favorites, recipe] };
      }
      return state;
    });
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== recipeId),
    }));
  },

  recommendations: [],
  generateRecommendations: () => {
    set((state) => {
      const recommendedRecipes = state.recipes.filter((recipe) =>
        state.favorites.some((favorite) =>
          recipe.ingredients.some((ingredient) =>
            favorite.ingredients.includes(ingredient)
          )
        )
      );
      return { recommendations: recommendedRecipes };
    });
  }
}));

export default useRecipeStore;
