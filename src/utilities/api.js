import axios from 'axios';

// Add API base url
const STAGING_URL = '';
const PRODUCTION_URL = '';
const BASE_URL = 'http://private-0aa632-befit2.apiary-mock.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  method: 'get',
  headers: {
    'content-type': 'application/json',
  },
});
const EXPIRY_DATE = null;

export default class Api {
  static fetchWrapper(method, url, data) {
    return (() => {
      switch (method) {
        case 'post':
          return axiosInstance.post(url, data);
        case 'get':
          return axiosInstance.get(url, { params: data });
        case 'put':
          return axiosInstance.put(url, data);
        case 'delete':
          return axiosInstance.delete(url);
        default:
          return Promise.reject(new Error('Expected post/get/put/delete'));
      }
    }).then(res => {
      debugger;
      return res.data;
    });
  }
  static updateHeadersWithToken() {
    return axiosInstance.post('/login').then(res => {
      debugger;
      if (res.status === 200) {
        // success get token from request
        return Api.updateHeaders({
          //  Authorization: `Bearer ${token}`,
        });
      }
      return res.data;
    });
  }
  static loginUser() {
    return Api.updateHeadersWithToken();
  }
  static updateHeaders(headers) {
    const axiosHeaders = axiosInstance.defaults.headers || {};
    axiosInstance.defaults.headers = { ...axiosHeaders, ...headers };
  }
}
