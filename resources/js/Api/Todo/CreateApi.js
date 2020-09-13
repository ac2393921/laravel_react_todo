import axios from 'axios'

export default function createApi(title, date, time, content)  {
  return axios.post('/api/todo/create', {
    title: title,
    date: date,
    time: time,
    content: content,
  })
}
