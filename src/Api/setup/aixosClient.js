import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://622fef20f113bfceed447a89.mockapi.io",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    //   Handle error here ...
    throw err;
  }
);

export default axiosClient;
