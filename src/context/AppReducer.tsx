
interface  Itransaction{
    id:number;
    text:string;
    amount:number;
}

interface ITransactions{
    transactions:Itransaction[];
}



interface IAction {
    type: string;
    payload: {
        transactions:Itransaction[];
    };
}


export const AppReducer : React.Reducer<ITransactions,IAction> = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }