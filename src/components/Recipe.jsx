function Recipe() {
    // Function to retrieve recipe name
    const retrieveName = (recipeName) => {
        if (!recipeName) {
            return "";
        }
        return recipeName;
    }
    
    // Function to retrieve recipe information (ingredients or instructions)
    const retrieveInstructions = (recipeName) => {
        try {
            if (!recipeName) {
                return "";
            }

            const recipeInfoString = sessionStorage.getItem('recipe_info');
            if (!recipeInfoString) {
                console.error("Recipe information not found in sessionStorage");
                return "";
            }
        
            const recipeInfo = JSON.parse(recipeInfoString);
            const recipe = recipeInfo.find(recipe => recipe.recipe_name === recipeName);
            if (!recipe) {
                console.error("Recipe not found in recipe information");
                return "";
            }

            const numberedInstructions = recipe.instructions.map((instruction, index) => `${index + 1}. ${instruction}`);
    
            return numberedInstructions.map((instruction, index) => <div key={index}>{instruction}</div>);
        } catch(error) {
            console.error("Error parsing:", error);
            return "";
        }
    }
    
    // Function to retrieve ingredients
    const retrieveIngredients = (recipeName) => {
        try {
            if (!recipeName) {
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
            
            <h2 className="recipe-text">Ingredients</h2>
      
            <p className="text">{retrieveIngredients(sessionStorage.getItem('currentRecipe'))}</p>

    
            <h2 className="recipe-text">Instructions</h2>
      
            <div className="text">
                {retrieveInstructions(sessionStorage.getItem('currentRecipe'))}
            </div>
        </div>
    )
}

export default Recipe;