import * as types from '../actions/types';


const INITIAL_STATE = { 
  session: {
    data: {}, error:null, loading: false, login: false
  }
};

INITIAL_STATE.session = {
  "data":{
    "name": {
      "first": "Jerson David",
      "last": "Betin Pantoja"
    },
    "rol": "admin",
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZDE1MGM5YTBkNmJiOTIyYTlmYjQ2ODEiLCJ1c2VyIjoiMTA2OTQ4NDE0OSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNTYyNDI1ODA2LCJleHAiOjE1NjMyODk4MDZ9.2uKI-MHCxjYfEsic2M2LTP52pG0R4nv1qphmOi_IC74",
    "user":"1069484149"
  },
    "loading":false,
    "login": true
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

      case types.UPDATE_NAME_SESSION:
        return {
          ...state,
          session: { ...state.session, data: { ...state.session.data, name: action.payload } }
        };
    default: return state;
  }
};