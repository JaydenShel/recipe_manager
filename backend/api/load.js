const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post('/', async (req, res) => {
    // Decode the auth token to get the username to access user information in the database
    const { token } = req.body;
    let username;
    try {
        const decodedToken = jwt.verify(token, global.secretKey);
        username = decodedToken.username; 
    } catch (error) {
        console.error("Error verifying/authenticating auth token:", error);
        return res.status(400).json({ error: "Failed to verify/authenticate auth token" });
    }
    try {
        const { queryDatabase } = require('../server');
        const query = `SELECT * FROM recipedb.recipes
                       WHERE username = '${username}'`;
        const result = await queryDatabase(query);
        
        console.log(result);
        
        if (result.length === 0) {
            return res.status(200).json({ error: "User has no recipes" });
        }

        res.status(200).json({ username, recipes: result });
    } catch (error) {
        console.error("Error loading recipes:", error);
        return res.status(400).json({ error: "Failed to load recipes" });
    }
});

module.exports = router;