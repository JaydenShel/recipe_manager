const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    const { recipeSlots } = req.body;
    console.log(recipeSlots);
    if (!recipeSlots) {
        return res.status(400).json({ error: 'Store API lacking information' });
    }
    const recipeNames = recipeSlots.map(recipe => recipe.recipeName);
    
    res.status(200);
});

module.exports = router;