const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    const { recipeSlots } = req.body;
    console.log(recipeSlots);
    try {
        for (const recipe of recipeSlots) {
            const { recipeName, ingredients, instructions } = recipe;
            const query = 
                `INSERT INTO recipedb.recipes (recipe_name, ingredients, instructions)
                VALUES ($1, $2, $3)`;
                const { queryDatabase } = require('../server');
            await queryDatabase(query, [recipeName, ingredients, instructions]);
        }
        res.status(201).json({ message: 'Recipes stored successfully!' });
    } catch (error) {
        console.error('Error storing recipes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;