import React from 'react'
import './style.css'
import { GlobalContext } from '../../context/GlobalState'
import { Transaction } from '../transaction/Transaction';
import { Spinner } from '../spinner/Spinner';
export const TransactionList = () => {
    const {loading, deleteTransaction,transactions,getTranscations} = React.useContext(GlobalContext);
    React.useEffect(()=>{
        if(getTranscations!==undefined)
            getTranscations();
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <>
            <h3>History</h3>
            {loading && <Spinner/>}
            <ul id="list" className="list">
                {transactions.map(transaction => (
                   <Transaction key={transaction.id} transaction={transaction} onClick={deleteTransaction }  />
                ))}
                
            </ul>
        </>
    )
}
