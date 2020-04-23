//packages  
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');

//Express App declartion
const app = express();
app.use(express.json());

//to add dotenv config it is running on local
if (process.env.NODE_ENV !== "production")
    dotenv.config({ path: './config/config.env' });

if (process.env.NODE_ENV != "production")
    app.use(morgan('dev'));

//Connecting DB
connectDB();

//importing Routes 
const transactions = require('./routes/transaction');

app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('../client/build'));
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
    });
}


app.listen(process.env.PORT, console.log(`Server is Running on ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold));