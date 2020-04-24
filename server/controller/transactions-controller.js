const Transactions = require('../models/transactions-model')

// @desc  Get all the transaction
// @routes GET /api/v1/transactions
// @access Public 
exports.getTransactions = async(req, res, next) => {
    try {
        const transaction = await Transactions.find({ user: req.params.user });
        return res.status(200).json({
            sucsess: true,
            count: transaction.length,
            data: transaction
        });

    } catch (error) {
        return res.status(500).json({
            sucsess: false,
            error: 'Server Error,Try After Some Time'
        });
    }
}

// @desc  Add a transaction
// @routes POST /api/v1/transactions
// @access Public 
exports.addTransactions = async(req, res, next) => {
    try {
        const { text, amount } = req.body;
        const transaction = await Transactions.create(req.body);
        return res.status(201).json({
            sucsess: true,
            data: transaction
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                sucsess: false,
                error: messages
            });

        } else
            return res.status(500).json({
                sucsess: false,
                error: 'Server Error'
            });
    }

}

// @desc  Delete a transaction
// @routes GET /api/v1/transactions
// @access Public 
exports.deleteTransactions = async(req, res, next) => {
    try {
        const transaction = await Transactions.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({
                sucsess: false,
                error: 'No Transaction Found'
            });
        }

        await transaction.remove();
        return res.status(200).json({
            sucsess: true,
            message: 'Transaction Removed'
        });
    } catch (error) {
        return res.status(500).json({
            sucsess: false,
            error: 'Server Error'
        });
    }
}