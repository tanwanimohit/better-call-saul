import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Balance } from './components/balance/Balance';
import { IncomeExpenses } from './components/incomeExpenses/IncomeExpenses';
import { TransactionList } from './components/transactionList/TransactionList';
import { Addtransaction } from './components/addTransaction/Addtransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <Addtransaction/>
        <TransactionList/>
      </div>
    </GlobalProvider>
  );
}

export default App;
