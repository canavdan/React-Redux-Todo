import {
    FETCHING_TODO_LIST_FAILURE,
    FETCHING_TODO_LIST_REQUEST,
    FETCHING_TODO_LIST_SUCCESS,
  } from './types'

  export const fetchTodoListRequest = () => ({
    type: FETCHING_TODO_LIST_REQUEST,
  })
  export const fetchTodoListSuccess = todolist => ({
    type: FETCHING_TODO_LIST_SUCCESS,
    payload: todolist,
  })
  export const fetchTodoListFailure = error => ({
    type: FETCHING_TODO_LIST_FAILURE,
    payload: error,
  })

  export const fetchTodoList = () => async dispatch => {
    dispatch(fetchTodoListRequest())
    try {
      const apiUrl = ``
      const response = await fetch(apiUrl)
      const json = await response.json()
      dispatch(fetchTodoListSuccess(json.launches.map(processTodoList)))
    } catch (error) {
      dispatch(fetchTodoListFailure(error))
    }
  }

  const processTodoList = todoList => ({
    name: todoList.name,
    id: todoList.id,   
  })