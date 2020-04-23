import React from 'react'
import { Itransaction } from '../../context/GlobalState'
import { numberWithCommas } from '../../utils/format';

interface IProps {
    transaction: Itransaction;
    key: number;
    onClick: ((id: string) => void) | undefined;
}

export const Transaction = (props: IProps) => {
    const transaction = props.transaction;
    const sign = transaction.amount > 0 ? "+" : "-";
    const CallAction = () => {
        if (props.transaction._id!==undefined && props.onClick !== undefined ) {
            props.onClick(transaction._id || "");
        }
    }
    return (
        <>
            <li key={transaction.id} className={transaction.amount > 0 ? "plus" : "minus"}>
    {transaction.text} <span>{sign}₹{numberWithCommas(Math.abs(transaction.amount).toString())}</span><p>{transaction.date}</p>
                <button onClick={CallAction} className="delete-btn">X</button>
            </li>
        </>
    )
}
