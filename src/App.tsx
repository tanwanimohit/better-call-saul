import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Balance } from './components/balance/Balance';
import { IncomeExpenses } from './components/incomeExpenses/IncomeExpenses';
import { TransactionList } from './components/transactionList/TransactionList';
import { Addtransaction } from './components/addTransaction/Addtransaction';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <Addtransaction/>
      </div>
    </div>
  );
}

export default App;
