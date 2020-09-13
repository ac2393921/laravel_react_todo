import axios from 'axios'

export default function checkApi(id, isChecked)  {
  return axios.put(`/api/todo/${id}/check`, {
    is_checked: isChecked,
  })
}
