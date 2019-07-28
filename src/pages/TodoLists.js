import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../containers/templates/Header';
import { Link } from 'react-router-dom';
import { fetchTodoList } from '../actions'
import TodoList from '../components/TodoList'
class TodoLists extends Component {

      componentDidMount() {
        const { match: { params } } = this.props;   
         this.props.fetchTodoList(params.id);
         
      }
  render() {
    return (
      <div>
        <Header/>     
    <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">To-Do Lists</h1>
                    <br />
                    <Link to="/addtodolist"  className="btn btn-lg btn-info">Create a To-Do</Link>   
                    <br />
                    <hr />                   
                    {this.props.todoList.todoList.map((item, index) => (
                         <TodoList  {...item}/> 
                     ))}                            
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    todoList: state.todoList,
})
export default connect(
    mapStateToProps,
    { fetchTodoList }
  )(TodoLists);

