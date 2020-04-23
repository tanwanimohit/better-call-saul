const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please Add Some Text']
    },
    amount: {
        type: Number,
        required: [true, 'Please Add Amount']
    },
    createdAt: {
        type: Date,
        default: Date.now

    }
});

module.exports = mongoose.model('TransactionSchema', TransactionSchema);