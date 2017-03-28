import {
  SURNAME_CHANGED,
  SORT_CODE_CHANGED,
  ACCOUNT_NUMBER_CHANGED,
  PASSCODE_CHANGED,
  MEMORABLE_WORD_CHANGED
} from './types';

export const surnameChanged = (text) => {
    return {
        type: SURNAME_CHANGED,
        payload: text
    };
};

export const sortCodeChanged = (text) => {
    return {
        type: SORT_CODE_CHANGED,
        payload: text
    };
};

export const accountNumberChanged = (text) => {
    return {
        type: ACCOUNT_NUMBER_CHANGED,
        payload: text
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

// TO DO Login user
