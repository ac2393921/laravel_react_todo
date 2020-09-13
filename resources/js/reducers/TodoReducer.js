const initialState = {
  todos: [],
}

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        todos: action.result
      }
    case 'CREATE_SUCCESS':
      return {
        ...state,
        todos: []
      }
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        todos: action.result
      }
    case 'CHECK_SUCCESS':
      return {
        ...state,
        todos: action.result
      }
    case 'DELETE_SUCCESS':
      const newTodos = state.todos.slice().filter(todo => todo.id !== action.id)
      return {
        ...state,
        todos: newTodos
      }
    default:
      return state;
  }
}