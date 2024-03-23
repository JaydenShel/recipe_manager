const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Please provide both username and password." });
    }

    if (password.length < 8 || password.length > 16) {
        return res.status(401).json({ error: "Password must be between 8 and 16 characters." });
    }

    res.status(200).json({ message: "Registration successful!" });
    

});

module.exports = router;