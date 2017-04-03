import { combineReducers } from 'redux';
import StringsReducer from './StringsReducer';
import Authreducer from './AuthReducer';
import BankImageSelectionReducer from './BankImageSelectionReducer';

export default combineReducers({
  stringsReducer: StringsReducer,
  bankImageSelectionReducer: BankImageSelectionReducer,
  auth: Authreducer
});
