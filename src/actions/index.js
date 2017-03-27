import {
    WELCOME_PAGE,
    CHOOSE_BANK_PAGE,
    CONNECT_BANK_PAGE,
    BANK_TRANSACTION_PAGE,

    BARCLAYS_SELECTED,
    NATWEST_SELECTED,
    LLOYDS_SELECTED,
    HSBC_SELECTED,
    TSB_SELECTED,
    SANTANDER_SELECTED
} from './types';

////////////////////////////
// Displayed page strings //
///////////////////////////

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

////////////////////
// Bank selection //
///////////////////

export const barclaysSelected = (imageId) => {
    return {
        type: BARCLAYS_SELECTED,
        payload: imageId
    };
};

export const natwestSelected = (imageId) => {
    return {
        type: NATWEST_SELECTED,
        payload: imageId
    };
};

export const lloydsSelected = (imageId) => {
    return {
        type: LLOYDS_SELECTED,
        payload: imageId
    };
};

export const hsbcSelected = (imageId) => {
    return {
        type: HSBC_SELECTED,
        payload: imageId
    };
};

export const tsbSelected = (imageId) => {
    return {
        type: TSB_SELECTED,
        payload: imageId
    };
};

export const santanderSelected = (imageId) => {
    return {
        type: SANTANDER_SELECTED,
        payload: imageId
    };
};

