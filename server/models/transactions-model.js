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

    },
    date: {
        type: String,
        trim: true,
        required: false
    },
    user: {
        type: String,
        trim: true,
        required: [true, 'Email Id Missing']
    },
});

module.exports = mongoose.model('TransactionSchema', TransactionSchema);