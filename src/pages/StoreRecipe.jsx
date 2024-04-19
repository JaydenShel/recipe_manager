import React, { useState } from 'react';
import HomeButton from '../components/HomeButton';

const StoreRecipe = () => {
    const [recipeSlots, setRecipeSlots] = useState([{ ingredients: [''], instructions: [''], recipeName: [''] }]);
    const [error, setError] = useState('');

    const addRecipeSlot = () => {
        setRecipeSlots([...recipeSlots, { ingredients: [''], instructions: [''], recipeName: [''] }]);
    };

    const handleRecipeChange = (index, value) => {
        const newRecipeSlots = [...recipeSlots];
        newRecipeSlots[index].recipeName = value;
        setRecipeSlots(newRecipeSlots);
    };

    const addIngredient = (index) => {
        const newRecipeSlots = [...recipeSlots];
        newRecipeSlots[index].ingredients.push('');
        setRecipeSlots(newRecipeSlots);
    };

    const addInstructionStep = (index) => {
        const newRecipeSlots = [...recipeSlots];
        newRecipeSlots[index].instructions.push('');
        setRecipeSlots(newRecipeSlots);
    };

    const handleIngredientChange = (recipeIndex, ingredientIndex, value) => {
        const newRecipeSlots = [...recipeSlots];
        newRecipeSlots[recipeIndex].ingredients[ingredientIndex] = value;
        setRecipeSlots(newRecipeSlots);
    };

    const handleInstructionChange = (recipeIndex, instructionIndex, value) => {
        const newRecipeSlots = [...recipeSlots];
        newRecipeSlots[recipeIndex].instructions[instructionIndex] = value;
        setRecipeSlots(newRecipeSlots);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = sessionStorage.getItem('username');
        try {
            const response = await fetch("http://localhost:3000/store/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ recipeSlots, username }),
            });
            console.log(response);
            if (response.status >= 400) {
                setError("Store Failed");
            } 
            else {
                setError("Store Successful");
            }
        } catch (error) {
            setError(error.message);
        }
      
        setTimeout(() => {
            window.location.href = "/recipes";
        }, 10);
    };

    return (
        <div className='home-page'>
            <div className='store-background'>
                <HomeButton/>
                <div className='text'>
                    <h2>Store Recipe</h2>
                    <form onSubmit={handleSubmit}>
                        {recipeSlots.map((recipe, index) => (
                            <div key={index}>
                                <label htmlFor={`recipeName${index}`}>Recipe Name:</label>
                                    <input
                                        type="text"
                                        id={`recipeName${index}`}
                                        value={recipe.recipeName} 
                                        onChange={(e) => handleRecipeChange(index, e.target.value)}
                                        required
                                    />
                                <label htmlFor={`ingredients${index}`}>Ingredients:</label>
                                {recipe.ingredients.map((ingredient, ingredientIndex) => (
                                    <div key={ingredientIndex}>
                                        <input
                                            type="text"
                                            value={ingredient}
                                            onChange={(e) => handleIngredientChange(index, ingredientIndex, e.target.value)}
                                            required
                                        />
                                    </div>
                                ))}
                                <hr></hr>
                                <button type="button" className='button' onClick={() => addIngredient(index)}>Add Ingredient</button>
                                
                                <label htmlFor={`instructions${index}`}>Instructions:</label>
                                {recipe.instructions.map((instruction, instructionIndex) => (
                                    <div key={instructionIndex}>
                                        <p className='instruction-index'>{instructionIndex + 1}.</p>
                                        <textarea
                                            value={instruction}
                                            onChange={(e) => handleInstructionChange(index, instructionIndex, e.target.value)}
                                            required
                                        />
                                    </div>
                                ))}
                                <hr></hr>
                                <button type="button" className='button' onClick={() => addInstructionStep(index)}>Add Instruction Step</button>
                                <hr></hr>
                            </div>
                        ))}
                        <button type="button" className='button' onClick={addRecipeSlot}>Add Recipe Slot</button>
                        <button type="submit" className='button'>Submit</button>
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default StoreRecipe;