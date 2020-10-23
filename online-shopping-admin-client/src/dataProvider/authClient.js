// in src/authClient.js
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';
import admin from 'admin-on-rest/lib/reducer/admin';

export default (type, params) => {
  // called when the user attempts to log in
  if (type === AUTH_LOGIN) {
    const { username, password } = params;

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username);
      return Promise.resolve();
    }
    return Promise.reject();
  }
  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username');
    return Promise.resolve();
  }
  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  }
  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject();
  }
  return Promise.reject('Unknown method');
};
