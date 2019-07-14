import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from '../modules/sessions';
import snackbar from '../modules/snackbar';
import commons from '../modules/commons';

export default (history) => combineReducers({
  session,
  snackbar,
  commons,
  router: connectRouter(history)
});