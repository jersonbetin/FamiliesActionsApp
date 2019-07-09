import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from '../modules/sessions';
import snackbar from '../modules/snackbar';

export default (history) => combineReducers({
  session,
  snackbar,
  router: connectRouter(history)
});