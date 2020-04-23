//packages
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

//Express App declartion
const app = express();

//importing Routes 
const transactions = require('./routes/transaction');

//to add dotenv config it is running on local
if (process.env.NODE_ENV != "production")
    dotenv.config({ path: './config/config.env' });

app.use('/api/v1/transactions', transactions);

app.listen(process.env.PORT, console.log(`Server is Running on ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold));