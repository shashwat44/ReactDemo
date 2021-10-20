import Axios from "axios";
import { stringify } from "qs";
import { BASE_URL } from "../services/urls";

function createAxios() {
  const axios = Axios.create();

  // axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/`;
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.timeout = 2 * 60 * 1000; // 2 minutes

  axios.interceptors.response.use(
    (response) => response?.data,
    (error) => {
      if (error?.response?.data) return Promise.reject(error.response.data);
      return Promise.reject(error);
    }
  );

  axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('AuthToken')
    config.headers['__authorization_x_token'] =  token;

    return config;
});

  return axios;
}

// Initialise Axios
const api = createAxios();
let url = BASE_URL;
const service = {
  get(route, query = {}, options = {}) {
    return api.get(`${url}${route}?${stringify(query)}`, options);
  },
  post(route, payload = {}, options = {}) {
    return api.post(`${url}${route}`, payload, options);
  },
  put(route, payload = {}, options = {}) {
    return api.put(`${url}${route}`, payload, options);
  },
  delete(route, id, options = {}) {
    return api.delete(`${url}${route}/${id}`, options);
  },
  patch(route, payload = {}, options = {}) {
    return api.patch(`${url}${route}`, payload, options);
  },
};

export default service;
