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

  export const fetchTodoItem = (todoListId) => async dispatch => {
    dispatch(fetchTodoItemRequest())
    try {
     const apiUrl = `http://localhost:8080/api/v1/todoitem/all/${todoListId}`
      const response = await fetch(apiUrl)
      const json = await response.json()
      
      dispatch(fetchTodoItemSuccess(json.map(processTodoItem)))
    } catch (error) {
      dispatch(fetchTodoItemFailure(error))
    }
  }

  const processTodoItem = todoItem => ({
    name: todoItem.name,
    id: todoItem.id,   
    description:todoItem.description,
    priority:todoItem.priority,
    status:todoItem.status.id,
    todoListId:todoItem.todoList.id,
    todoItem:todoItem.deadline
  })