import React from 'react'
import './style.css'
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';
import { IProps } from '../header/Header'

export const IncomeExpenses = (props: IProps) => {
    const { transactions } = React.useContext(GlobalContext);
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    console.log(firstDay, " ", lastDay);
    const income = transactions.filter(item => item.amount > 0).filter(item => (item.createdAt ? new Date(item.createdAt) : "") > firstDay && (item.createdAt ? new Date(item.createdAt) : "") < lastDay).reduce((amt, item) => (amt += item.amount), 0).toFixed(2);
    const expense = (transactions.filter(item => item.amount < 0).filter(item => (item.createdAt ? new Date(item.createdAt) : "") > firstDay && (item.createdAt ? new Date(item.createdAt) : "") < lastDay).reduce((amt, item) => (amt += item.amount), 0) * (-1)).toFixed(2);
    return (
        <>
            <h5 className="ie-heading">{monthNames[date.getMonth()]} Month's </h5>
            <div className={props.darkMode ? "income-expenses darkmode" : "income-expenses"}>
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className="money-plus">₹{numberWithCommas(income)}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money-minus">₹{numberWithCommas(expense)}</p>
                </div>
            </div>
        </>
    )
}
