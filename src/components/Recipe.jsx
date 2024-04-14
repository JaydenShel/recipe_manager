
function Recipe() {

    const retrieveName = (recipeName) => {
        if (!recipeName) {
            // Handle the case where 'recipeName' is null
            console.error("Recipe name not found");
            return "";
        }
        return recipeName;
    }
    
    const retrieveInstructions = (recipeName) => {
        const recipeInfoString = sessionStorage.getItem('recipe_info');
        if (!recipeInfoString) {
            // Handle the case where 'recipe_info' is null
            console.error("Recipe information not found in sessionStorage");
            return "";
        }
    
        const recipeInfo = JSON.parse(recipeInfoString);
        const recipe = recipeInfo.find(recipe => recipe.recipe_name === recipeName);
        return recipe ? recipe.instructions.join("\n") : "";
    }
    
    const retrieveIngredients = (recipeName) => {
        const recipeInfoString = sessionStorage.getItem('recipe_info');
        if (!recipeInfoString) {
            // Handle the case where 'recipe_info' is null
            console.error("Recipe information not found in sessionStorage");
            return "";
        }
    
        const recipeInfo = JSON.parse(recipeInfoString);
        const recipe = recipeInfo.find(recipe => recipe.recipe_name === recipeName);
        return recipe ? recipe.ingredients.join(", ") : "";
    }
    return(
        <div>
            <h1 className="recipe-title">{retrieveName(sessionStorage.getItem('currentRecipe'))}</h1>
            <p className="text">{retrieveIngredients(sessionStorage.getItem('currentRecipe'))}</p>
            <p className="text">{retrieveInstructions(sessionStorage.getItem('currentRecipe'))}</p>
        </div>

    )
}

export default Recipe;
