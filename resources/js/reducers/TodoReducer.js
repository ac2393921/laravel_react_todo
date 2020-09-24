const initialState = {
  todos: {
    isFetching: false,
    items: []
  },
}

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INIT_TODOS':
      return {
        ...state,
        todos: {
          isFetching: false,
          items: []
        }
      }
    case 'FETCH_ALL_SUCCESS':
      return {
        ...state,
        todos: {
          isFetching: true,
          items: action.data
        }
      }
    case 'CREATE_SUCCESS':
      return {
        ...state,
        todos: {
          isFetching: false,
          items: action.data
        }
      }
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        todos: {
          isFetching: false,
          items: action.data
        }
      }
    case 'CHECK_SUCCESS':
      return {
        ...state,
        todos: {
          isFetching: false,
          items: action.data
        }
      }
    case 'DELETE_SUCCESS':
      const newTodos = state.todos.slice().filter(todo => todo.id !== action.id)
      return {
        ...state,
        todos: {
          isFetching: false,
          items: action.data
        }
      }
    default:
      return state;
  }
}