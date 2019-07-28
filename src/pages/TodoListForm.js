import React, { Component } from 'react'
import Header from './../containers/templates/Header';
import { connect } from 'react-redux'
import { createTodoList } from '../actions'

class TodoListForm extends Component {
    constructor() {
        super();   
        this.state = {
          name: "",
          createdAt: "",
          description: "",
          memberId:"1"
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
      }
    componentDidMount(){ 
    }
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
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
    return (
      <div>
        <Header/>
    <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create / Edit To-Do Form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Project Name" name="name"
                            onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control form-control-lg" name="description"                          
                            onChange={this.onChange} placeholder="Project Description"></textarea>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" onChange={this.onChange} name="createdAt" />
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


