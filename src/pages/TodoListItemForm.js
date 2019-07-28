import React, { Component } from 'react'
import Header from './../containers/templates/Header';
import { connect } from 'react-redux'
import { createTodoItem } from '../actions'
class TodoListItemForm extends Component {
    constructor() {
        super();   
        this.state = {
          name: "",
          description: "",
          deadline:"",
          dependTodoItemId:"",
          statusId:"",
          priority:"",
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
          priority: this.state.priority,
          statusId: this.state.statusId,
          description: this.state.description,
          todoListId:this.props.match.params.id,
          deadline:this.state.deadline,
          dependTodoItemId:this.state.dependTodoItemId
        };
        this.props.createTodoItem(newTodo);
      }
      getDependTodoItems() {
        var arr =  this.props.todoItem.todoItem
        for (let i = 1; i <= arr.length; i++) {
            arr.push(<option key={arr[i].id} value={arr[i].id} onChange={this.onChange}>{arr[i].name}</option>)
        }
        return arr; 
    }
  render() {
    return (
      <div>
      <Header/>
  <div className="project">
      <div className="container">
          <div className="row">
              <div className="col-md-8 m-auto">
                  <h5 className="display-4 text-center">Create / Edit To-Do Item</h5>
                  <hr />
                  <form>
                      <div className="form-group">
                          <input type="text" className="form-control form-control-lg " placeholder="Item Name" />
                      </div>                                       
                      <div className="form-group">
                          <textarea className="form-control form-control-lg" placeholder="Description"></textarea>
                      </div>
                      <h6>Status</h6>
                        <div className="form-group">
                        <select
                        value={this.state.statusId}
                        onChange={this.onChange}
                    >
                      <option value="1">To-Do</option>
                      <option value="2">In Progress</option>
                      <option value="3">Done</option>
                    </select>
                        </div>
                      <h6>Estimated End Date</h6>
                      <div className="form-group">
                          <input type="date" className="form-control form-control-lg" name="deadline" />
                      </div>
                      <h6>Priority</h6>
                      <div className="form-group">
                          <input type="number" className="form-control form-control-lg" name="priority" />
                      </div>
                      <h6>Depend on To-Do Item</h6>
                      <div className="form-group">
                      {this.getDependTodoItems()}
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
    todoItem: state.todoItem,
})
export default connect(
    mapStateToProps,
    { createTodoItem }
  )(TodoListItemForm);
