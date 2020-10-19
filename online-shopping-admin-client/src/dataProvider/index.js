import { fetchUtils, simpleRestClient } from 'admin-on-rest';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  //options.headers.set('x-access-token', localStorage.getItem('token'));
  return fetchUtils.fetchJson(url, options);
};
const restClient = simpleRestClient('http://localhost:8080/api/v1', httpClient);

export { restClient };
