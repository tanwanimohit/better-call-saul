import React, { Reducer } from 'react'

import { AppReducer } from './AppReducer';

export interface Itransaction {
    id: number;
    text: string;
    amount: number;
    date: string;

}

export interface ITransactions {
    transactions: Itransaction[];
    deleteTransaction?: (id: number) => void;
    addTransaction?: (transaction: Itransaction) => void;
}


export interface IAction {
    type: string;
    payload: any
}

//Default Value
const initialState: ITransactions = {
    transactions: []
}

//Context
export const GlobalContext = React.createContext(initialState);

//Provider 
export const GlobalProvider = ({ children }: any) => {
    const [state, dispatch] = React.useReducer<Reducer<ITransactions, IAction>>(AppReducer, initialState);

    const deleteTransaction = (id: number) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id

        });
    }

    const addTransaction = (transaction: Itransaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction

        });
    }

    return (<GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
        {children}
    </GlobalContext.Provider>)
}