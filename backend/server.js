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
const deleteRoute = require('./api/delete')

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/register', registerRoute);
app.use('/load', loadRoute);
app.use('/store', storeRoute);
app.use('/delete', deleteRoute);

const client = new Client({user:'dwhupwkaxbbvpt', host: 'ec2-35-169-9-79.compute-1.amazonaws.com',
 database:'de6dnkja0sec7f',password:'a12b542886c4e77c11077db38f18c460e43beb4d6de182b6cbfde1fd69fcdf03', port: 5432, ssl: {
  rejectUnauthorized: false
 } })

client.connect() .then(() => { console.log('Connected to PostgreSQL database!'); })
.catch((err) => { console.error('Error connecting to the database:', err); });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

