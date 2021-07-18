const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require('../controller/transactions-controller')

router
    .route('/')
    .post(addTransactions);

router
    .route('/:id')
    .delete(deleteTransactions);

router
    .route('/')
    .get(getTransactions);

module.exports = router;