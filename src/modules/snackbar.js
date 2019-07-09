import { OPEN_SNACK, CLOSE_SNACK } from '../actions/snackbar';

const INITIAL_STATE = { options: { open: false, message: '', type: 'success' } };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_SNACK:
      const { message, type } = action.payload
      return {
        ...state,
        options: { open: true, message, type }
      };
    case CLOSE_SNACK:
      return {
        ...state,
        options: { open: false, message: '', type: 'success' }
      };
    default: return state;
  }
};