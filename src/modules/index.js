import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from '../modules/sessions';

export default (history) => combineReducers({
  session,
  router: connectRouter(history)
});