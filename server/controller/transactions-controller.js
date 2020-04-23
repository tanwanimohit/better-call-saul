const Transactions = require('../models/transactions-model')

// @desc  Get all the transaction
// @routes GET /api/v1/transactions
// @access Public 
exports.getTransactions = (req, res, next) => {

}

// @desc  Add a transaction
// @routes POST /api/v1/transactions
// @access Public 
exports.addTransactions = (req, res, next) => {
    res.send('POST Transactions');
}

// @desc  Delete a transaction
// @routes GET /api/v1/transactions
// @access Public 
exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE Transactions');
}