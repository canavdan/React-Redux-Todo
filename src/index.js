import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { BrowserRouter , Route } from "react-router-dom"
import { Switch } from 'react-router'
import  LoginPage  from './pages/LoginPage';
import  MainPage  from './pages/MainPage';
import Registration from './pages/Registration';
import  TodoItem  from './pages/TodoItem';
import  TodoListForm  from './pages/TodoListForm';
import TodoListItemForm  from './pages/TodoListItemForm';
import  TodoLists  from '../src/pages/TodoLists';
import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(<Provider store={store}>
   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={MainPage} />
         <Route exact path="/login" component={LoginPage} />
         <Route exact path="/mainpage" component={MainPage} />
         <Route exact path="/register" component={Registration} />
         <Route exact path="/todo-items/:id" component={TodoItem} />
         <Route exact path="/addtodolist" component={TodoListForm} />,
         <Route exact path="/updatetodolist/:id" component={TodoListForm} />
         <Route exact path="/addtodolistitem" component={TodoListItemForm} />
         <Route exact path="/updatetodolistitem/:id" component={TodoListItemForm} />
         <Route exact path="/todo-lists/:id" component={TodoLists} />     
         <Route path="/*" component={() => 'NOT FOUND'} />
      </Switch>
      </BrowserRouter>
  
  </Provider>
  ,document.getElementById('root'));
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
