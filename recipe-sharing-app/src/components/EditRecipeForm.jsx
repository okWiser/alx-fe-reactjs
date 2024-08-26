import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

function EditRecipeForm({ recipeId }) {
  const [editedRecipe, setEditedRecipe] = useState({});
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const recipeToEdit = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Update the recipe in the store
    updateRecipe({ ...recipeToEdit, ...editedRecipe });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={editedRecipe.title || recipeToEdit.title}
        onChange={handleInputChange}
      />
      {/* Other input fields for ingredients, instructions, etc. */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditRecipeForm;
