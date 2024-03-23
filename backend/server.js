const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const registerRoute = require('./api/register');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/register', registerRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

