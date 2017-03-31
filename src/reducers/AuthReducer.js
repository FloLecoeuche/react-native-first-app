import {
  SURNAME_CHANGED,
  SORT_CODE_CHANGED,
  ACCOUNT_NUMBER_CHANGED,
  PASSCODE_CHANGED,
  MEMORABLE_WORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  surname: '',
  sortCode: '',
  accountNumber: '',
  passcode: '',
  memorableWord: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case SURNAME_CHANGED:
      return { ...state, surname: action.payload };

    case SORT_CODE_CHANGED:
      return { ...state, sortCode: action.payload };
    
    case ACCOUNT_NUMBER_CHANGED:
      return { ...state, accountNumber: action.payload };

    case PASSCODE_CHANGED:
      return { ...state, passcode: action.payload };

    case MEMORABLE_WORD_CHANGED:
      return { ...state, memorableWord: action.payload };

    case LOGIN_USER:
        return { ...state, loading: true, error: '' };

    case LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload, loading: false };

    case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication failed.', password: '', loading: false };

    default:
      return state;
  }
};
