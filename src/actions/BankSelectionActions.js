import {
  BARCLAYS_SELECTED,
  NATWEST_SELECTED,
  LLOYDS_SELECTED,
  HSBC_SELECTED,
  TSB_SELECTED,
  SANTANDER_SELECTED
} from './types';

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
