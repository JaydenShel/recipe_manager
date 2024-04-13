import React, { useEffect } from 'react';

function Recipe() {

    //Retrieve recipe name from session
    const retrieveName = (recipeName) => {
        return recipeName;
    }

    //Retrieve recipe instructions from session
    const retrieveInstructions = (recipeName) => {
        return;
    }

    //Retrieve recipe ingredients from session
    const retrieveIngredients = (recipeName) => {
        return;
    }
    return(
        <div>
            <h1>{retrieveName(sessionStorage.getItem('currentRecipe'))}</h1>
            <p>Recipe Ingredients</p>
            <p>Recipe instructions</p>
        </div>

    )
}

export default Recipe;
