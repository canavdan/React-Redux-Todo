import {
    FETCHING_TODO_ITEM_FAILURE,
    FETCHING_TODO_ITEM_REQUEST,
    FETCHING_TODO_ITEM_SUCCESS,
    ADD_TODO_ITEM,
    ADD_TODO_ITEM_FAILURE,
    DELETE_TODO_ITEM,
    DELETE_TODO_ITEM_FAILURE,
    UPDATE_TODO_ITEM,
    UPDATE_TODO_ITEM_FAILURE
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
  export const addTodoItem = todo => ({
    type: ADD_TODO_ITEM,
    payload: todo,
  })
  export const addTodoItemFailure = error => ({
    type: ADD_TODO_ITEM_FAILURE,
    payload: error,
  })
  export const updateTodoItemSuccess = todo => ({
    type: UPDATE_TODO_ITEM,
    payload: todo,
  })
  export const updateTodoItemFailure = error => ({
    type: UPDATE_TODO_ITEM_FAILURE,
    payload: error,
  })
  export const deleteTodoItemAc = response => ({
    type: DELETE_TODO_ITEM,
    payload: response,
  })
  export const deleteTodoItemFailure = error => ({
    type: DELETE_TODO_ITEM_FAILURE,
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

  export const createTodoItem = (newTodo) => async dispatch => {

    try {     
      const response=await fetch('http://localhost:8080/api/v1/todoitem', {
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
       dispatch(addTodoItem(json))        
    } catch (error) {
      dispatch(addTodoItemFailure(error))
    }
  }
  export const updateTodoList = (newTodo) => async dispatch => {    
    try {     
      const response= await fetch('http://localhost:8080/api/v1/todoitem', {
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
      dispatch(updateTodoItemSuccess(json))

    } catch (error) {
      dispatch(updateTodoItemFailure(error))
    }
  }

  export const deleteTodoItem = (todoItemId) => async dispatch => {    
    try {     
      const response= await fetch( `http://localhost:8080/api/v1/todoitem/${todoItemId}`, {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},     
       })
       const json = await response.json()
      dispatch(deleteTodoItemAc(json))

    } catch (error) {
      dispatch(deleteTodoItemFailure(error))
    }
  }