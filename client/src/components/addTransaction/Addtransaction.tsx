import React from 'react'
import './style.css'
import { GlobalContext } from '../../context/GlobalState';
export const Addtransaction = () => {
    const [text, setText] = React.useState<string>("");
    const [amount, setAmount] = React.useState(0);
    const { addTransaction } = React.useContext(GlobalContext);

    const addTrans = (str: string) => {

        var today = new Date();
        var date =  today.getDate()+ '-' + (today.getMonth() + 1);
        if (amount > 0 && text.length > 0) {
            const transaction = {
                id: (Math.random() * 1000000),
                
                text: text,
                amount: str === "income" ? Math.abs(amount) : Math.abs(amount) * (-1),
                date: date
            }
            if (addTransaction !== undefined) {
                addTransaction(transaction);
                setText('');
                setAmount(0);
            }
        }

    }
    return (
        <>
            <h3>Add Transaction</h3>
            <form id="form" method="POST">
                <div className="form-control">
                    <label htmlFor="text" >Description</label>
                    <input type="text" autoComplete="off" id="text" maxLength={25} value={text} onChange={(e) => setText(e.target.value)} placeholder="What is this About?" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount </label
                    >
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} placeholder="Enter amount..." />
                </div>
                <button onClick={() => addTrans("income")} type="button" className="income-btn"> Add Income</button>
                <button onClick={() => addTrans("expense")} type="button" className="expense-btn"> Add Expense</button>
            </form>
        </>
    )
}
