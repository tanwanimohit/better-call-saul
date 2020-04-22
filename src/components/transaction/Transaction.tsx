import React from 'react'
import { Itransaction } from '../../context/GlobalState'

interface IProps {
    transaction: Itransaction;
    key: number;
    onClick: ((id: number) => void) | undefined;
}

export const Transaction = (props: IProps) => {
    const transaction = props.transaction;
    const sign = transaction.amount > 0 ? "+" : "-";
    const CallAction = () => {
        if (props.onClick !== undefined) {
            props.onClick(transaction.id);
        }
    }
    return (
        <>
            <li key={transaction.id} className={transaction.amount > 0 ? "plus" : "minus"}>
    {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><p>{transaction.date}</p>
                <button onClick={CallAction} className="delete-btn">X</button>
            </li>
        </>
    )
}
