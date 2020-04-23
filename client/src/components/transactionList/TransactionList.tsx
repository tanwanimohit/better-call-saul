import React from 'react'
import './style.css'
import { GlobalContext } from '../../context/GlobalState'
import { Transaction } from '../transaction/Transaction';
export const TransactionList = () => {
    const {deleteTransaction,transactions} = React.useContext(GlobalContext);
    
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                   <Transaction key={transaction.id} transaction={transaction} onClick={deleteTransaction }  />
                ))}
                
            </ul>
        </>
    )
}
