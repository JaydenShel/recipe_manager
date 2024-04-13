const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Please provide both username and password." });
    }

    if (password.length < 8 || password.length > 16) {
        return res.status(400).json({ error: "Password must be between 8 and 16 characters." });
    }

    if (username.length < 1 || username.length > 32) {
        return res.status(400).json({ error: "Username in wrong format." });
    }

    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    
    try {
        const { queryDatabase } = require('../server');
        const checkUsername = `SELECT username FROM recipedb.user WHERE username = $1`;
        const result = await queryDatabase(checkUsername, [username]);
        if(result.length > 0) {
            return res.status(400).json({error: 'Username already exists!'})   
        }

        const query = 
                `INSERT INTO recipedb.user (username, password)
                VALUES ($1, $2)`;
        await queryDatabase(query, [username, password]);

        return res.status(200).json({token})
        
        
    } catch (error) {
        console.error("error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }    
});

module.exports = router;