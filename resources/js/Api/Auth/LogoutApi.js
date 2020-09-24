import axios from 'axios'

export default function loginApi()  {
  return axios.post('/api/auth/logout')
}