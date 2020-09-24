import axios from 'axios';

export default function fetchAuthenticatedUserApi() {
  return axios.post('/api/auth/me')
}