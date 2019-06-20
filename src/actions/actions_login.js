import Api from '../utilities/api';

export const LOGIN_USER = {
  ROOT: 'LOGIN_USER',
  PENDING: 'LOGIN_USER_PENDING',
  REJECTED: 'LOGIN_USER_REJECTED',
  FULFILLED: 'LOGIN_USER_FULFILLED',
};

export function login(data) {
  return { type: LOGIN_USER.ROOT, payload: Api.loginUser(data) };
}
