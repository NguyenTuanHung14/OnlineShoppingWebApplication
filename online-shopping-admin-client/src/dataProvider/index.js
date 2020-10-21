import { fetchUtils, simpleRestClient } from 'admin-on-rest';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  //options.headers.set('x-access-token', localStorage.getItem('token'));
  return fetchUtils.fetchJson(url, options);
};
const restClient = simpleRestClient('http://localhost:3001/api', httpClient);

export { restClient };
