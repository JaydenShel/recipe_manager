const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    const { recipeSlots, username } = req.body;
    console.log(recipeSlots, username);
    console.log(req.body);
    try {
        for (const recipe of recipeSlots) {
            const { recipeName, ingredients, instructions } = recipe;
            const query = 
                `INSERT INTO recipedb.recipes (recipe_name, ingredients, instructions, username)
                VALUES ($1, $2, $3, $4)`;
                const { queryDatabase } = require('../server');
            await queryDatabase(query, [recipeName, ingredients, instructions, username]);
        }
        res.status(201).json({ message: 'Recipes stored successfully!' });
    } catch (error) {
        console.error('Error storing recipes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;