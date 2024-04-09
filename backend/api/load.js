const express = require("express");
const jwt = require("jsonwebtoken"); 

const router = express.Router();

router.post('/', async (req, res) => {
    //Decode the auth token to get username to access user information in database
    console.log(req.body);
    const { auth_token } = req.body;
    let username;
    try {
        username = jwt.decode(auth_token, global.secretKey); 
        res.status(200).json({ username }); 
    } catch (error) {
        console.error("Error decoding auth token:", error);
        return res.status(400).json({ error: "Failed to decode auth token" });
    }
});

module.exports = router;