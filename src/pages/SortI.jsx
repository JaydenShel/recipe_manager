import React, { useState } from 'react';
import HomeButton from '../components/HomeButton';

function SortI() {
   const [sortedIngredients, setSortedIngredients] = useState([{ ingredient: '' }]);

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sorted Ingredients:", sortedIngredients);
    const recipeData = JSON.parse(sessionStorage.getItem('recipe_info'));
    const matchingRecipes = []; 

    recipeData.forEach(recipe => {
      const recipeIngredients = recipe.ingredients;

      const hasAllIngredients = sortedIngredients.every(ingredientObj => {
        return recipeIngredients.includes(ingredientObj.ingredient);
      });

      if (hasAllIngredients) {
        matchingRecipes.push(recipe.recipe_name);
      }


      setTimeout( () => {
        window.location.href = "/recipes";
    }, 1000);

    sessionStorage.setItem('isSortedI', true);
    sessionStorage.setItem('sortedRecipeNames', JSON.stringify(matchingRecipes));
    });

    console.log("Matching Recipes:", matchingRecipes);

   }
   
   const handleChange = (index, e) => {
        const { value } = e.target;
        const newIngredients = [...sortedIngredients];
        newIngredients[index].ingredient = value;
        setSortedIngredients(newIngredients);
   }

   const addIngredient = (e) => {
        e.preventDefault(); 
        setSortedIngredients([...sortedIngredients, { ingredient: '' }]);
   }


    return (
        <div className='sort-box'>
            <HomeButton/>
            <p className='subtitle'>Enter your ingredients</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='ingredient-background'>
                        {sortedIngredients.map((ingredient, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    value={ingredient.ingredient}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                        ))}
                    </div>
                    <button onClick={addIngredient} className='button'>Add Ingredient</button>
                    <button type="submit" className='button'>Sort Ingredients</button>
                </form>
            </div>
        </div>
    )
}

export default SortI;