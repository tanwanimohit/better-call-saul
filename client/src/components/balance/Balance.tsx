import React from 'react'
import './style.css'
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';

export const Balance = () => {
  const { transactions } = React.useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((amt, item) => (amt += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{numberWithCommas(total)}</h1>
    </>
  )
}
