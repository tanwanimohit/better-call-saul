import React from 'react'
import './style.css'
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';
export const IncomeExpenses = () => {
    const { transactions } = React.useContext(GlobalContext);
    const income = transactions.filter(item => item.amount > 0).reduce((amt, item) => (amt += item.amount), 0).toFixed(2);
    const expense = (transactions.filter(item => item.amount < 0).reduce((amt, item) => (amt += item.amount), 0)*(-1)).toFixed(2);
    return (
        <div className="income-expenses">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money-plus">₹{numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money-minus">₹{numberWithCommas(expense)}</p>
            </div>
        </div>
    )
}
