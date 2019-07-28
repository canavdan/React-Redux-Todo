import React, { Component } from "react";
import Header from "./../containers/templates/Header";
import { connect } from "react-redux";
import { updateTodoItem } from "../actions";

class UpdateTodoItem extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      createdAt: "",
      description: "",
      deadline: "",
      dependTodoItemId: "",
      dependTodoItemName:"",
      statusId: "",
      priority: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    const todoItem = this.props.todoItem.todoItem.filter(
        item => item.id == this.props.match.params.id
      )
      this.setState({
          name:todoItem[0].name,
          description:todoItem[0].description,
          deadline :todoItem[0].deadline,
          dependTodoItemId:todoItem[0].dependTodoItemId,
          dependTodoItemName:todoItem[0].dependTodoItemName,  
          statusId :todoItem[0].statusId, 
          priority:todoItem[0].priority, 
        })
  }
  getDependTodoItems() {
    var arr =  this.props.todoItem.todoItem
    for (let i = 1; i <= arr.length; i++) {
        arr.push(<option key={arr[i].id} value={arr[i].id} onChange={this.onChange}>{arr[i].name}</option>)
    }
    return arr; 
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
      id: this.props.match.params.id,
      dependTodoItemId: this.state.dependTodoItemId
    };
    this.props.updateTodoItem(newTodo);
  }

  render() {
    const todoItem = this.props.todoItem.todoItem.filter(
      item => item.id == this.props.match.params.id
    );
    return (
      <div>
        <Header />
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Create / Edit To-Do Form
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="To-Do Item Name"
                      name="name"
                      onChange={this.onChange}
                      value={this.state.name}
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      onChange={this.onChange}
                      name="description"
                      value={this.state.description}
                      placeholder="Description"
                    />
                  </div>
                  <h6>Depend on To-Do Item</h6>
                  <div className="form-group">
                    {this.getDependTodoItems()}
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
                  <h6>Priority</h6>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      name="priority"
                      value={this.state.priority}
                    />
                  </div>
                  <h6>Deadline</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      onChange={this.onChange}
                      value={this.state.deadline}
                      name="deadline"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoItem: state.todoItem
});
export default connect(
  mapStateToProps,
  { updateTodoItem }
)(UpdateTodoItem);
