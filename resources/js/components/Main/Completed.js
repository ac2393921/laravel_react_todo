import React from 'react'

import Todo from './TodoItem'

function Completed(props) {
  return (
    <div className='completed'>
      <div className="state">
          <h1>完了済み</h1>
        </div>
        <div className="todos">
          {
            props.todos.map(({id, date, title, time, content, is_checked}) => (
              <Todo
                key={id}
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
