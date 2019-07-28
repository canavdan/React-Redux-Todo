import {
    FETCHING_TODO_LIST_FAILURE,
    FETCHING_TODO_LIST_REQUEST,
    FETCHING_TODO_LIST_SUCCESS,
    ADD_TODO_LIST,
    ADD_TODO_LIST_FAILURE
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
  export const addTodoList = error => ({
    type: ADD_TODO_LIST,
    payload: error,
  })
  export const addTodoListFailure = error => ({
    type: ADD_TODO_LIST_FAILURE,
    payload: error,
  })

  export const fetchTodoList = (memberId) => async dispatch => {
    dispatch(fetchTodoListRequest())
    try {     
      //const apiUrl = `http://localhost:8080/api/v1/todolist/all/${memberId}`
      const apiUrl = `http://localhost:8080/api/v1/todolist/all/`
      const response = await fetch(apiUrl)
      const json = await response.json()
      
      dispatch(fetchTodoListSuccess(json.map(processTodoList)))
    } catch (error) {
      dispatch(fetchTodoListFailure(error))
    }
  }

  const processTodoList = todoList => ({
    id: todoList.id,   
    name: todoList.name,
    username:todoList.member.username,
    createdAt:todoList.created_At,
  })

  export const createTodoList = (newTodo) => async dispatch => {
    
    try {     
      //const apiUrl = `http://localhost:8080/api/v1/todolist/all/${memberId}`
      const apiUrl = `http://localhost:8080/api/v1/todolist/all/`
      const response = await fetch(apiUrl)
      const json = await response.json()
      dispatch(addTodoList())

    } catch (error) {
      dispatch(addTodoListFailure(error))
    }
  }