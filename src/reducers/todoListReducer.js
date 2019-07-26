import {
    FETCHING_TODO_LIST_FAILURE,
    FETCHING_TODO_LIST_REQUEST,
    FETCHING_TODO_LIST_SUCCESS,
  } from '../actions/types'

  const initialState = {
    isLoading: false,
    todoList: [],
    errorMessage: '',
  }

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCHING_TODO_LIST_REQUEST:
          return { ...state, isLoading: true }
        case FETCHING_TODO_LIST_SUCCESS:
          return { ...state, isLoading: false, todoList:payload }
        case FETCHING_TODO_LIST_FAILURE:
          return { ...state, isLoading: false, errorMessage:payload }
        default:
          return state
      }
}
