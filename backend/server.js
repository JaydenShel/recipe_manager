const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString('hex');
global.secretKey = secretKey;

const registerRoute = require('./api/register');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/register', registerRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

