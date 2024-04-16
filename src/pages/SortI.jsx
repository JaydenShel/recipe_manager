import React, { useState } from 'react';
import HomeButton from '../components/HomeButton';

function SortI() {
   const [sortedIngredients, setSortedIngredients] = useState([{ ingredient: '' }]);

   const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("sortedIngredients", sortedIngredients);
        console.log("Sorted Ingredients:", sortedIngredients);
        setTimeout( () => {
            window.location.href = "/recipes";
        }, 100);
   }
   
   const handleChange = (index, e) => {
        const { value } = e.target;
        const newIngredients = [...sortedIngredients];
        newIngredients[index].ingredient = value;
        setSortedIngredients(newIngredients);
   }

   const addIngredient = () => {
        setSortedIngredients([...sortedIngredients, { ingredient: '' }]);
   }

   const capacityAlert = () => {
        alert(`Maximum capacity reached.`);
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