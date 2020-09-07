import React from 'react'
import Todo from './Todo'

function Completed(props) {
  const getTodos = () => {
    return props.getTodos();
  }

  return (
    <div className='app__main completed'>
      <div className="state">
          <h1>完了済み</h1>
        </div>
        <div className="todos">
          {
            props.todos.map(({id, date, title, time, content, is_checked}) => (
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
