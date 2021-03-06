import axios from 'axios';

axios.defaults.withCredentials = true;
const URL = 'http://localhost:5000/api';

export function requestIfLoged() {
  return axios.request({
    method: 'get',
    url: `${URL}`,
  });
}
export function requestLogin(action) {
  return axios.request({
    method: 'post',
    url: `${URL}/auth/login`,
    data: {
      ...action.payload,
    },
  });
}
export function requestLogout() {
  return axios.request({
    method: 'post',
    url: `${URL}/auth/logout`,
  });
}

