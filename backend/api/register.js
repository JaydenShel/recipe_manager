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
    res.status(200).json({token});
    
});

module.exports = router;