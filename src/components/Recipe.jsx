
function Recipe() {

    const retrieveName = (recipeName) => {
        if (!recipeName) {
            console.error("Recipe name not found");
            return "";
        }
        return recipeName;
    }
    
    const retrieveInstructions = (recipeName) => {
        try {
            if (!recipeName) {
                console.error("Recipe name not found");
                return "";
            }
    
            const recipeInfoString = sessionStorage.getItem('recipe_info');
            if (!recipeInfoString) {
                console.error("Recipe information not found in sessionStorage");
                return "";
            }
        
            const recipeInfo = JSON.parse(recipeInfoString);
            const recipe = recipeInfo.find(recipe => recipe.recipe_name === recipeName);
            return recipe ? recipe.instructions.join("\n") : "";
        } catch(error) {
            console.error("Error parsing:", error);
            return "";
        }
    }
    
    const retrieveIngredients = (recipeName) => {
        try {
            if (!recipeName) {
                console.error("Recipe name not found");
                return "";
            }
    
            const recipeInfoString = sessionStorage.getItem('recipe_info');
            if (!recipeInfoString) {
                console.error("Recipe information not found in sessionStorage");
                return "";
            }
    
            const recipeInfo = JSON.parse(recipeInfoString);
            const recipe = recipeInfo.find(recipe => recipe.recipe_name === recipeName);
            return recipe ? recipe.ingredients.join(", ") : "";
        } catch(error) {
            console.error("Error parsing:", error);
            return "";
        }
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
