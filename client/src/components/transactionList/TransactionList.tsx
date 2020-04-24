import React from 'react'
import './style.css'
import { GlobalContext } from '../../context/GlobalState'
import { Transaction } from '../transaction/Transaction';
import { Spinner } from '../spinner/Spinner';

interface IProp
{
    email:string;
}

export const TransactionList = (props:IProp) => {
    const {loading, deleteTransaction,transactions,getTranscations} = React.useContext(GlobalContext);
    const [transactionLength,settransactionLength]=React.useState(10);
    React.useEffect(()=>{
        if(getTranscations!==undefined)
        {
            getTranscations(props.email);
            //console.log(props.email);
        }
            
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    const increaseLength = () => {
        const newLength = transactionLength+10;
        if(newLength<transactions.length)
            settransactionLength(newLength);
        else
            settransactionLength(transactions.length);
    }
    
    return (
        <>
            <h3>History</h3>
            {loading && <Spinner/>}
            <ul id="list" className="list">
                {transactions.slice().reverse().slice(0,transactionLength).map(transaction => (
                   <Transaction key={transaction._id || " "} transaction={transaction} onClick={deleteTransaction }  />
                ))}
                { !loading && transactionLength<transactions.length && <button type="button" onClick={increaseLength} className="loadmore-btn"> Load more</button>}
            </ul>
            
            
        </>
    )
}
