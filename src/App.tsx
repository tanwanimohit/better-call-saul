import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Balance } from './components/balance/Balance';
import { IncomeExpenses } from './components/incomeExpenses/IncomeExpenses';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
      </div>
    </div>
  );
}

export default App;
