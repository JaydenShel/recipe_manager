import React, { useEffect, useState } from 'react';

function RecipeBox(){
    useEffect(() => {
        console.log(sessionStorage.getItem('token'));
        load();
    }, []);

    const retrieve = async (recipeName) => {
        const response = await fetch("http://localhost:3000/retrieve/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            });
    }

    const load = async () => {
        const response = fetch("http://localhost:3000/load/", {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sessionStorage.getItem('token')),
        });
    }

    return (

        <div className="recipe-box">
            <div className="button-container">
                <button className="button">
                    <p>Store Recipe</p>
                </button>
                <button className="button">
                    <p>Delete Recipe</p>
                </button>
            </div>
            <div className="button-container">
                <h1 className="text">NA</h1>
                <label htmlFor="recipes" className="recipe-dropdown">Choose a Recipe:</label>
                <select id="recipes" name="recipes">
                    <option value="NA">NA</option>
                </select>
            </div>
        </div>
    )
}

export default RecipeBox;