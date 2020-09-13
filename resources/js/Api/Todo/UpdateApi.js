import axios from 'axios'

export default function updateApi(id, title, date, time, content)  {
  return axios.put(`/api/todo/${id}`, {
    title: title,
    date: date,
    time: time,
    content: content,
  })
}
