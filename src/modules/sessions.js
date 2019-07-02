import * as types from '../actions/types';

const INITIAL_STATE = { 
  session: {
    data: {}, error:null, loading: false, login: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_SESSION:
      return {
        ...state,
        session: { data: {}, error:null, loading: true, login: false }
      };
    case types.FETCH_SESSION_SUCCESS:
      return {
        ...state,
        session: { data: action.payload, error:null, loading: false, login: true  }
      };
    case types.FETCH_SESSION_FAILURE:
      return {
        ...state,
        session: { data: {}, error:action.payload, loading: false, login: false  }
      };

      case types.FETCH_CLOSE_SESSION:
        return {
          ...state,
          session: { data: {}, error:null, loading: false, login: false }
        };
    default: return state;
  }
};