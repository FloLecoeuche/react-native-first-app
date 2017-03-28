import { combineReducers } from 'redux';
import StringsReducer from './StringsReducer';
import BankChoiceReducer from './BankChoiceReducer';
import BankFormReducer from './BankFormReducer';
import Authreducer from './AuthReducer';
import BankTransactionsReducer from './BankTransactionsReducer';
import BankImageSelectionReducer from './BankImageSelectionReducer';

export default combineReducers({
  stringsReducer: StringsReducer,
  bankImageSelectionReducer: BankImageSelectionReducer,
  bankChoice: BankChoiceReducer,
  auth: Authreducer,
  bankForm: BankFormReducer,
  bankTransactions: BankTransactionsReducer
});
