import axios from 'axios'

export default function loginApi(username, email, password, passwordConfirm)  {
  return axios.post('/api/auth/register', {
    username: username,
    email: email,
    password: password,
    password_congirmation: passwordConfirm,
  })
}