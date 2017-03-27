import { combineReducers } from 'redux';
import StringsReducer from './StringsReducer';
import BankChoiceReducer from './BankChoiceReducer';
import BankFormReducer from './BankFormReducer';
import BankAuthreducer from './BankAuthReducer';
import BankTransactionsReducer from './BankTransactionsReducer';
import BankImageSelectionReducer from './BankImageSelectionReducer';

export default combineReducers({
  stringsReducer: StringsReducer,
  bankImageSelectionReducer: BankImageSelectionReducer,
  bankChoice: BankChoiceReducer,
  bankForm: BankFormReducer,
  bankAuth: BankAuthreducer,
  bankTransactions: BankTransactionsReducer
});
