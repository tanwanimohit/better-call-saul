import React from 'react'
import './style.css'
import { GlobalContext } from '../../context/GlobalState';
export const Addtransaction = () => {
    const [text,setText] = React.useState<string>("");
    const [amount,setAmount] = React.useState(0);
    const { addTransaction } = React.useContext(GlobalContext);

    const addTrans = () =>{
        const transaction = {
            id:(Math.random()*1000000),
            text:text,
            amount:amount
        }
        if(addTransaction!==undefined)
        {
            addTransaction(transaction);
        }
    }
    return (
        <>
            <h3>Add Transaction</h3>
            <form id="form" method="POST">
                <div className="form-control">
                    <label htmlFor="text" >Text</label>
                    <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value)) } placeholder="Enter amount..." />
                </div>
                <button  onClick={addTrans} type="button" className="btn">Add transaction</button>
            </form>
        </>
    )
}
