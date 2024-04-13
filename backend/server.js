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

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/register', registerRoute);
app.use('/load', loadRoute);
app.use('/store', storeRoute);
app.use('/delete', deleteRoute);

async function queryDatabase(query, value) {
  const client = new Client({
    user: 'juuvvchngxwoww',
    host: 'ec2-52-205-55-36.compute-1.amazonaws.com',
    database: 'dasnu3ht1t63jj',
    password: 'c66c247884d5a38d06f94758342ec00d565fb5bed496385f150163aa6765f37d',
    port: 5432,
    ssl: {
      rejectUnauthorized: false
    }
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