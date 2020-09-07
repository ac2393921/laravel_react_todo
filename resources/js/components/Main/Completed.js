import React, { useState, useEffect } from 'react'
import Todo from './Todo'

function Completed() {
  useEffect(() => {
    getTodos();
  }, [])

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    await axios.get('/api/todo/get')
    .then((res) => {
      setTodos(res.data.filter(todo => todo.is_checked === true))
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
    <div className='app__main completed'>
      <div className="state">
          <h1>完了済み</h1>
        </div>
        <div className="todos">
          {
            todos.map(({id, date, title, time, content, is_checked}) => (
              <Todo
                id={id}
                date={date}
                title={title}
                time={time}
                content={content}
                is_checked={is_checked}
                getTodos={() => getTodos()}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Completed
