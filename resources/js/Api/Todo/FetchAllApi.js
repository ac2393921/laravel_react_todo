import axios from 'axios';

export default function fetchAllApi() {
  return axios.get('/api/todo/get')
}