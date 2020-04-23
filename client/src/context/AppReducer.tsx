import { ITransactions, IAction } from './GlobalState'

export const AppReducer: React.Reducer<ITransactions, IAction> = (state, action) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return{
                
                transactions:state.transactions.filter(transaction => transaction.id!==action.payload)
            }
        case "ADD_TRANSACTION":
            return{
                
                transactions:[action.payload,...state.transactions]
            }
        default:
            return state;
    }
}