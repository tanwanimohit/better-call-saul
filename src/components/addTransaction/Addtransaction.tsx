import React from 'react'
import './style.css'
export const Addtransaction = () => {
    return (
        <>
            <h3>Add Transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label htmlFor="text" >Text</label>
                    <input type="text" id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
