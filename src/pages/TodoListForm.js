import React, { Component } from 'react'
import Header from './../containers/templates/Header';
import { connect } from 'react-redux'
import { fetchTodoList,createTodoList } from '../actions'

class TodoListForm extends Component {
    constructor() {
        super();   
        this.state = {
          name: "",
          createdAt: "",
          description: "",
        };
        this.onSubmit = this.onSubmit.bind(this);
      }
    componentDidMount(){
        const { match: { params } } = this.props;  
    }
    onSubmit(e) {
        e.preventDefault();
        const newTodo = {
          name: this.state.name,
          createdAt: this.state.createdAt,
          memberId: this.state.memberId,
          description: this.state.description,
        };
        this.props.createTodoList(newTodo);
      }
    
  render() {
      const todo=this.props.todoList.todoList.filter(item => item.id == this.props.match.params.id);      
    return (
      <div>
        <Header/>
    <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create / Edit To-Do Form</h5>
                    <hr />
                    <form onSubmit={this.handleSubmit}>>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Project Name"
                             value={todo.name}/>
                        </div>
                                            
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" 
                             value={todo.createdAt}
                            placeholder="Project Description"></textarea>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="start_date" />
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
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
    { createTodoList }
  )(TodoListForm);


