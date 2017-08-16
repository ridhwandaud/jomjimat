import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TransactionFormReducer from './TransactionFormReducer';
import TransactionsReducer from './TransactionsReducer';

export default combineReducers({
  auth: AuthReducer,
  transactionForm: TransactionFormReducer,
  transactions: TransactionsReducer,
}); 