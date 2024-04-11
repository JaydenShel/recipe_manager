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
        res.status(200).json({ username });
    } catch (error) {
        console.error("Error verifying/authenticating auth token:", error);
        return res.status(400).json({ error: "Failed to verify/authenticate auth token" });
    }
});

module.exports = router;