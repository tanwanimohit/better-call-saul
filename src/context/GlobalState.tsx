import React, { Reducer } from 'react'

import { AppReducer } from './AppReducer';

interface  Itransaction{
    id:number;
    text:string;
    amount:number;
}

interface ITransactions{
    transactions:Itransaction[];
}

const initialState:ITransactions = {
    transactions: [
        {id:1,text:'Flower', amount:-20},
        {id:2,text:'Salary', amount:300},
        {id:3,text:'Book', amount:-10}
    ]
}

interface IAction {
    type: string;
    payload: {
        transactions:Itransaction[];
    };
}

//Context
export const GlobalContext = React.createContext(initialState);

//Provider 
export const GlobalProvider = ({ children}: any) => {
    const [state, dispatch] = React.useReducer<Reducer<ITransactions,IAction>>(AppReducer,initialState);
    return (<GlobalContext.Provider value={{transactions:state.transactions}}>
        {children}    
    </GlobalContext.Provider>)
}