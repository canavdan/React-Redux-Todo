import {
    FETCHING_TODO_LIST_FAILURE,
    FETCHING_TODO_LIST_REQUEST,
    FETCHING_TODO_LIST_SUCCESS,
    ADD_TODO_LIST,
    ADD_TODO_LIST_FAILURE
  } from '../actions/types'

  const initialState = {
    isLoading: false,
    todoList: [],
    errorMessage: '',
  }

  const todoListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCHING_TODO_LIST_REQUEST:
          return { ...state, isLoading: true }
        case FETCHING_TODO_LIST_SUCCESS:
          return { ...state, isLoading: false, todoList:payload }
        case FETCHING_TODO_LIST_FAILURE:
          return { ...state, isLoading: false, errorMessage:payload }
          case ADD_TODO_LIST:
          return { ...state }
          case ADD_TODO_LIST_FAILURE:
          return { ...state, errorMessage:payload }
        default:
          return state
      }
}

export default todoListReducer