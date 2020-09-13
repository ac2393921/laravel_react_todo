import axios from 'axios'

export default function deleteApi(id) {
  return axios.delete(`/api/todo/${id}`)
}