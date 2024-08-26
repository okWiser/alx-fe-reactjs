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
        updateRecipe({ ...recipeToEdit, ...editedRecipe });
    };

    return (
        <div>
            <form onSubmit={event => event.preventDefault()}>
                <input
                    type="text"
                    name="description"
                    value={editedRecipe.description || recipeToEdit.description}
                    onChange={handleInputChange}
                />
                <button onClick={handleSave}>Save</button>
            </form>
        </div>
    );
}

export default EditRecipeForm;
