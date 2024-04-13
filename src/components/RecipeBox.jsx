import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';

function RecipeBox(){
    const [selectedRecipe, setSelectedRecipe] = useState('');

    useEffect(() => {
        load();
    }, []);

    //Remove selected recipe
    const remove = async (recipeName) => {
        const username = sessionStorage.getItem('username');
        const response = await fetch("http://localhost:3000/delete/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, recipeName }),
            });
    }

    //Load all recipes under username 
    const load = async () => {
        const token = sessionStorage.getItem('token');
        console.log({token});
        
        if (!token) {
            console.log("Token not found in sessionStorage");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:3000/load/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    
                },
                body: JSON.stringify({ token: token }),
            });
    
            if (response.ok) {
                console.log("Load request successful");

            } else {
                console.error("Load request failed");
              
            }

            const data = await response.json();
            const recipesArray = data.recipes;
            const recipeNames = recipesArray.map(recipe => recipe.recipe_name);
            
            sessionStorage.setItem('userRecipeNames', JSON.stringify(recipeNames));
            console.log(recipeNames);

            const selectName = document.getElementById('recipes');

            recipeNames.forEach(recipeName => {
                const option = document.createElement('option');
                option.value = recipeName;
                option.textContent = recipeName;
                selectName.appendChild(option);
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleSelectedChange = (event) => {
        setSelectedRecipe(event.target.value);
        sessionStorage.setItem('currentRecipe', event.target.value);
    }

    const deleteMessage = (recipeName) => {
        alert(`${recipeName} Has been succesfully deleted.`);
        window.location.reload();
    };

    return (
        <div className="recipe-box">
            <div className="button-container">
                <Link to={'/recipes/store'}>
                <button className="button">
                    <p>Store Recipe</p>
                </button>
                </Link>
                <button onClick={() => remove(selectedRecipe) && deleteMessage(selectedRecipe)} className="button">
                    <p>Delete Recipe</p>
                </button>
            </div>
            <div className="button-container">
                <h1 className="text">NA</h1>
                <label htmlFor="recipes" className="recipe-dropdown">Choose a Recipe:</label>
                <select onChange={handleSelectedChange} id="recipes" name="recipes">
                    <option value="-">-</option>
                </select>
            </div>
            <Recipe/>
        </div>
    )
}

export default RecipeBox;