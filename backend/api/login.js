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

    
    try {
        const { queryDatabase } = require('../server');
        
        const checkUsername = `SELECT * FROM recipedb.user WHERE username = $1`;
        const result = await queryDatabase(checkUsername, [username]);
        
        if(result.length == 0) {
            return res.status(400).json({error: 'Invalid Username or Password!'})   
        }

        const checkPassword = `SELECT * FROM recipedb.user WHERE password = $1`;
        const result1 = await queryDatabase(checkPassword, [password]);

        if(result1.length == 0) {
            return res.status(400).json({error: 'Invalid Username or Password!'})   
        } 
    
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        return res.status(200).json({token})

    } catch (error) {
        console.error("error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }    
});

module.exports = router;