import { Actions } from 'react-native-router-flux';
import {
  SURNAME_CHANGED,
  SORT_CODE_CHANGED,
  ACCOUNT_NUMBER_CHANGED,
  PASSCODE_CHANGED,
  MEMORABLE_WORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

export const surnameChanged = (text) => {
    return {
        type: SURNAME_CHANGED,
        payload: text
    };
};

export const sortCodeChanged = (text) => {
    // Check if text is only numbers
    const textAsNumbers = text.match(/^\d+$/) ? text : text.slice(0, -1);

    return {
        type: SORT_CODE_CHANGED,
        payload: textAsNumbers 
    };
};

export const accountNumberChanged = (text) => {
     // Check if text is only numbers
    const textAsNumbers = text.match(/^\d+$/) ? text : text.slice(0, -1);

    return {
        type: ACCOUNT_NUMBER_CHANGED,
        payload: textAsNumbers
    };
};

export const passcodeChanged = (text) => {
    return {
        type: PASSCODE_CHANGED,
        payload: text
    };
};

export const memorableWordChanged = (text) => {
    return {
        type: MEMORABLE_WORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ surname, sortCode, accountNumber, passcode, memorableWord }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        console.log(surname);
        console.log(sortCode);
        console.log(accountNumber);
        console.log(passcode);
        console.log(memorableWord);
        // Authentication API call
        setTimeout(() => loginUserSuccess(dispatch, {}), 2000);
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.bankTransactions();
};
