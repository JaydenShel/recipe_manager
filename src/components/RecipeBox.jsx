

function RecipeBox(){

    const retrieveRecipe = async (recipeName) => {
        const response = await fetch("http://localhost:3000/retrieve/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            });
    }

    return (

        <div className="recipe-box">
            <div className="button-container">
                <button onClick={retrieveRecipe("Lemon-Chicken")} className="button">
                    <p>Store Recipe</p>
                </button>
                <button className="button">
                    <p>Delete Recipe</p>
                </button>
            </div>
            <div className="button-container">
                <h1 className="text">NA</h1>
                <label for="recipes" className="recipe-dropdown">Choose a Recipe:</label>
                <select id="recipes" name="recipes">
                    <option value="NA">NA</option>
                </select>
            </div>
        </div>
    )
}

export default RecipeBox;