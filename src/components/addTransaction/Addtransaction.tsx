import React from 'react'
import './style.css'
export const Addtransaction = () => {
    const [text,setText] = React.useState("");
    const [amount,setAmount] = React.useState(0);
    return (
        <>
            <h3>Add Transaction</h3>
            <form id="form">
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
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
