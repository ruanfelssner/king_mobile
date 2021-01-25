

import * as axios from 'axios';

export const request = axios.interceptors.request.use(
    function (req) {      
      setSpinner(true)
      return req;
    },
    (err) => {
      setSpinner(false)
      return Promise.reject(err);
    }
  );

  export const response =   axios.interceptors.response.use(
    function (res) {
      setSpinner(true)
      return res;  
    },
    (err) => {
      setSpinner(false)
      return Promise.reject(err);
    }
  );