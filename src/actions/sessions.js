import axios from 'axios';
import { API } from '../constants';
import  * as types from './types';
export const fetchSession = ({id, password}) => {
  const request = axios({
    method: 'post',
    url: `${API}/sessions`,
    headers: [],
    data: {
      user: id,
      password
    }
  });

  return {
    type: types.FETCH_SESSION,
    payload: request
  };
}

export const fetchSessionSuccess = (data) => {
  return {
    type: types.FETCH_SESSION_SUCCESS,
    payload: data
  };
}

export const fetchSessionFailure = (error) => {
  return {
    type: types.FETCH_SESSION_FAILURE,
    payload: error
  };
}

export const fetchCloseSession = () => {
  return {
    type: types.FETCH_CLOSE_SESSION
  };
}