import axios from 'axios'

export default function loginApi(email, password)  {
  return axios.post('/api/auth/login', {
    email: email,
    password: password,
  })
}