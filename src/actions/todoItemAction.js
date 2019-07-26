import {
    FETCHING_TODO_ITEM_FAILURE,
    FETCHING_TODO_ITEM_REQUEST,
    FETCHING_TODO_ITEM_SUCCESS,
  } from './types'

  export const fetchTodoItemRequest = () => ({
    type: FETCHING_TODO_ITEM_REQUEST,
  })
  export const fetchTodoItemSuccess = todoitem => ({
    type: FETCHING_TODO_ITEM_SUCCESS,
    payload: todoitem,
  })
  export const fetchTodoItemFailure = error => ({
    type: FETCHING_TODO_ITEM_FAILURE,
    payload: error,
  })

  export const fetchTodoItem = () => async dispatch => {
    dispatch(fetchTodoItemRequest())
    try {
      const apiUrl = ``
      const response = await fetch(apiUrl)
      const json = await response.json()
      dispatch(fetchTodoItemSuccess(json.launches.map(processTodoItem)))
    } catch (error) {
      dispatch(fetchTodoItemFailure(error))
    }
  }

  const processTodoItem = todoList => ({
    name: todoList.name,
    id: todoList.id,   
  })