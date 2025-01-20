const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { Client } = require('pg');

const secretKey = crypto.randomBytes(32).toString('hex');
global.secretKey = secretKey;

const registerRoute = require('./api/register');
const loadRoute = require('./api/load');
const storeRoute = require('./api/store');
const deleteRoute = require('./api/delete');
const loginRoute = require('./api/login');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//CORS Configuration
const corsOptions = {
  origin: 'http://localhost:5173', //Frontend URL
  credentials: true,  //Allow credentials (cookies)
};

//Use CORS with the specified options
app.use(cors(corsOptions));

app.use('/register', registerRoute);
app.use('/load', loadRoute);
app.use('/store', storeRoute);
app.use('/delete', deleteRoute);
app.use('/login', loginRoute);

async function queryDatabase(query, value) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });
  try {
    await client.connect();
    const result = await client.query(query, value);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  } finally {
    await client.end();
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { queryDatabase };
