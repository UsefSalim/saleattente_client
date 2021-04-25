import axios from 'axios';

// axios.defaults.withCredentials = true;
const URL = 'http://localhost:5000/api/user';

export function userRequest() {
  return axios.request({
    method: 'get',
    url: `${URL}`,
  });
}
export function addPatientRequest(action) {
  return axios.request({
    method: 'get',
    url: `${URL}/createconsultation`,
    data: {
      ...action.payload,
    },
  });
}
