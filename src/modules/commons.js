import { FILLIN_MOTHER_LEADER } from '../actions/types';

const INITIAL_STATE = { motherLeader: { update: {} } };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILLIN_MOTHER_LEADER:
      return {
        ...state,
        motherLeader: { update: action.payload }
      };
    default: return state;
  }
};