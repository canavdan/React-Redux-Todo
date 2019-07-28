import { combineReducers } from 'redux'
import authReducer from './authReducer'
import todoListReducer from './todoListReducer';
import todoItemReducer from './todoItemReducer';

export default combineReducers({
  auth:authReducer,
  todoList:todoListReducer,
  todoItem:todoItemReducer,
})