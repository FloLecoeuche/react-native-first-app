import strings from '../resources/Strings.json';
import { 
  WELCOME_PAGE,
  CHOOSE_BANK_PAGE,
  CONNECT_BANK_PAGE,
  BANK_TRANSACTION_PAGE
} from '../actions/types';

const initialStateBase = {
  headerText: '',
  contentText: '',
  buttonText: ''
};

const INITIAL_STATE = {
  welcome: initialStateBase,
  chooseBank: { ...initialStateBase, navBarText: '' },
  connectBank: { ...initialStateBase, navBarText: '' },
  bankTransactions: { ...initialStateBase, navBarText: '' }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WELCOME_PAGE:
      return { ...state, ...INITIAL_STATE, welcome: strings.welcome };

    case CHOOSE_BANK_PAGE:
      return { ...state, ...INITIAL_STATE, chooseBank: strings.chooseBank };

    case CONNECT_BANK_PAGE:
      return { ...state, ...INITIAL_STATE, connectBank: strings.connectBank };

    case BANK_TRANSACTION_PAGE:
      return { ...state, ...INITIAL_STATE, bankTransactions: strings.bankTransactions };

    default:
      return state;
  }
};
