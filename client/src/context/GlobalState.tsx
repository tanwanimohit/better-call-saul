import React, { Reducer } from "react";
import axios from "axios";

import { AppReducer } from "./AppReducer";

export interface Itransaction {
  _id?: string;
  id: number;
  text: string;
  amount: number;
  date: string;
  createdAt?: Date;
}

export interface ITransactions {
  transactions: Itransaction[];
  deleteTransaction?: (id: string) => void;
  getTranscations?: (email: string) => void;
  addTransaction?: (transaction: Itransaction) => void;
  error?: string;
  loading?: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}

//Default Value
const initialState: ITransactions = {
  transactions: [],
  loading: true,
};

//Context
export const GlobalContext = React.createContext(initialState);

//Provider
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer<Reducer<ITransactions, IAction>>(
    AppReducer,
    initialState
  );

  //Actions
  async function getTranscations(email: string) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: email,
      },
    };
    try {
      const res = await axios.get(`api/v1/transactions/`, config);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  const deleteTransaction = async (id: string) => {
    try {
      await axios.delete(`api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction: Itransaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/v1/transactions/", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTranscations,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
