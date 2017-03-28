import {
    WELCOME_PAGE,
    CHOOSE_BANK_PAGE,
    CONNECT_BANK_PAGE,
    BANK_TRANSACTION_PAGE
} from './types';

export const welcomePageUpdate = () => {
    return {
        type: WELCOME_PAGE
    };
};

export const chooseBankPageUpdate = () => {
    return {
        type: CHOOSE_BANK_PAGE
    };
};

export const connectBankPageUpdate = () => {
    return {
        type: CONNECT_BANK_PAGE
    };
};

export const bankTransactionPageUpdate = () => {
    return {
        type: BANK_TRANSACTION_PAGE
    };
};
