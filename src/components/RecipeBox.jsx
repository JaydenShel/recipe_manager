import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';

function RecipeBox(){
    const [selectedRecipe, setSelectedRecipe] = useState('');
    const [sortIMessage, setSortIMessage] = useState('');

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

    //Takes in list of recipes to populate the recipe dropdown
    const populateDropdown = (recipeNames) => {
        const selectName = document.getElementById('recipes');
    
        recipeNames.forEach(recipeName => {
            const option = document.createElement('option');
            option.value = recipeName;
            option.textContent = recipeName;
            selectName.appendChild(option);
        });
    };

    //Based on whether a sort is active, button has differnt functionality
    const handleSortButton = () => {
        if(sessionStorage.getItem('isSortedI') == 'true'){
            sessionStorage.setItem('isSortedI', false);
            setSortIMessage('Sort by Ingredients');
            setTimeout( () => {
                window.location.href = "/recipes";
            }, 10);
        }
        else{
            setTimeout( () => {
                window.location.href = "/recipes/sortI";
            }, 10);
        }
    }

    const load = async () => {
    const token = sessionStorage.getItem('token');
    console.log({ token });

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
            return;
        }

        setSortIMessage('Sort by Ingredients');
        const data = await response.json();
        const recipesArray = data.recipes;
        if (!recipesArray) {
            console.error("No recipes");
            return;
        }
        sessionStorage.setItem('recipe_info', JSON.stringify(recipesArray));

        const recipeNames = recipesArray ? recipesArray.map(recipe => recipe.recipe_name) : [];
        sessionStorage.setItem('userRecipeNames', JSON.stringify(recipeNames));

        if (sessionStorage.getItem('isSortedI') === "true") {
            console.log('running sort');
            const sortedRecipeNames = JSON.parse(sessionStorage.getItem('sortedRecipeNames'));
            populateDropdown(sortedRecipeNames);
            setSortIMessage('Remove Sort by Ingredients');
            return;
        }

        populateDropdown(recipeNames);

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
               
                <button className="button" onClick={handleSortButton}>
                    <p>{sortIMessage}</p>
                </button>
               
                <Link to ={'/recipes/sortT'}>
                <button className="button">
                    <p>Sort by Time</p>
                </button>
                </Link>
            </div>
            <div className="button-container">
                <label htmlFor="recipes" className="choose">Choose a Recipe:</label>
                <select onChange={handleSelectedChange} id="recipes" name="recipes">
                    <option value="-">-</option>
                </select>
            </div>
            <Recipe/>
        </div>
    )
}

export default RecipeBox;