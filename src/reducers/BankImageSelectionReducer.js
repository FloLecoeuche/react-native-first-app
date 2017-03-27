import { 
  BARCLAYS_SELECTED,
  NATWEST_SELECTED,
  LLOYDS_SELECTED,
  HSBC_SELECTED,
  TSB_SELECTED,
  SANTANDER_SELECTED
} from '../actions/types';

const INITIAL_STATE = {
  imageId: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BARCLAYS_SELECTED:
      return { ...state, imageId: 'barclays' };

    case NATWEST_SELECTED:
      return { ...state, imageId: 'natwest' };

    case LLOYDS_SELECTED:
      return { ...state, imageId: 'lloyds' };

    case HSBC_SELECTED:
      return { ...state, imageId: 'hsbc' };

    case TSB_SELECTED:
      return { ...state, imageId: 'tsb' };

    case SANTANDER_SELECTED:
      return { ...state, imageId: 'santander' };

    default:
      return state;
  }
};
