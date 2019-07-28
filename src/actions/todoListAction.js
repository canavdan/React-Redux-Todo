import {
    FETCHING_TODO_LIST_FAILURE,
    FETCHING_TODO_LIST_REQUEST,
    FETCHING_TODO_LIST_SUCCESS,
    ADD_TODO_LIST,
    ADD_TODO_LIST_FAILURE,
    UPDATE_TODO_LIST,
    UPDATE_TODO_LIST_FAILURE,
    DELETE_TODO_LIST,
    DELETE_TODO_LIST_FAILURE
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
  export const addTodoList = todo => ({
    type: ADD_TODO_LIST,
    payload: todo,
  })
  export const addTodoListFailure = error => ({
    type: ADD_TODO_LIST_FAILURE,
    payload: error,
  })
  export const updateTodoListSuccess = todo => ({
    type: UPDATE_TODO_LIST,
    payload: todo,
  })
  export const updateTodoListFailure = error => ({
    type: UPDATE_TODO_LIST_FAILURE,
    payload: error,
  })
  export const deleteTodoList = error => ({
    type: DELETE_TODO_LIST,
    payload: error,
  })
  export const deleteTodoListFailure = error => ({
    type: DELETE_TODO_LIST_FAILURE,
    payload: error,
  })

  export const fetchTodoList = (memberId) => async dispatch => {
    dispatch(fetchTodoListRequest())
    try {     
      const apiUrl = `http://localhost:8080/api/v1/todolist/all/${memberId}`
     // const apiUrl = `http://localhost:8080/api/v1/todolist/all/`
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
    console.log(newTodo)
    console.log(newTodo["name"])
    try {     
      const response=await fetch('http://localhost:8080/api/v1/todolist', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: {
         "name": newTodo["name"],
         "member":{
           "id":newTodo["memberId"],   
         }    
        }
       })
       const json = await response.json()
       dispatch(addTodoList(json))        
    } catch (error) {
      dispatch(addTodoListFailure(error))
    }
  }
  export const updateTodoList = (newTodo) => async dispatch => {    
    try {     
      const response= await fetch('http://localhost:8080/api/v1/todolist', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: {
         "id":newTodo["id"],
         "name": newTodo["name"],
         "member":{
           "id":newTodo["memberId"],   
         }    
        }
       })
       const json = await response.json()
      dispatch(updateTodoListSuccess(json))

    } catch (error) {
      dispatch(updateTodoListFailure(error))
    }
  }
  