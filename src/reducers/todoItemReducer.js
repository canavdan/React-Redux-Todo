import {
    FETCHING_TODO_ITEM_FAILURE,
    FETCHING_TODO_ITEM_REQUEST,
    FETCHING_TODO_ITEM_SUCCESS,
  } from '../actions/types'

  const initialState = {
    isLoading: false,
    todoItem: [],
    errorMessage: '',
  }

const toItemReducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCHING_TODO_ITEM_REQUEST:
          return { ...state, isLoading: true }
        case FETCHING_TODO_ITEM_SUCCESS:
          return { ...state, isLoading: false, todoItem:payload }
        case FETCHING_TODO_ITEM_FAILURE:
          return { ...state, isLoading: false, errorMessage:payload }
        default:
          return state
      }
}
export default toItemReducer;