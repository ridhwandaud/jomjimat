import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TransactionFormReducer from './TransactionFormReducer';

export default combineReducers({
  auth: AuthReducer,
  transactionForm: TransactionFormReducer,
}); 