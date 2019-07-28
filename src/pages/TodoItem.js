import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../containers/templates/Header";
import { Link } from "react-router-dom";
import { fetchTodoItem, deleteTodoItem } from "../actions";

class TodoItem extends Component {
  constructor() {
    super();
    this.state ={
        todoItem: [],
    }
    this.onClick = this.onClick.bind(this);
    this.search = this.search.bind(this);
    this.filter = this.filter.bind(this);
    this.order = this.filter.bind(this);
  }

  componentDidMount() {
    const {match: { params }} = this.props;
    this.setState({todoItem:this.props.fetchTodoItem(params.id)})
   
  }

  onClick(e) {
    this.props.deleteTodoItem(this.props.id);
    if (this.props.todoItem.error) alert(this.props.todoItem.error);
    else
      this.props.history.push(`/todo-item/${this.props.todoItem.todoList.id}`);
  }
  search(e) {
   this.setState({todoItem:this.state.todoItem.filter(item=>item.name = e.target.value )})
  }
  filter(e) {
    if(e.target.value == 1)
    this.setState({todoItem:this.props.fetchTodoItem(this.props.match.params.id)})
    else if(e.target.value == 2)
    this.setState({todoItem:this.state.todoItem.filter(item=>item.status = 1 )})
    else
    this.setState({todoItem:this.state.todoItem.filter(item=>item.status = 2 )})
  }
  order(e) {
    if(e.target.value == 1)
    this.setState({todoItem:this.props.fetchTodoItem(this.props.match.params.id)})
    else if(e.target.value == 2)
    this.setState({todoItem:this.state.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    })})
    else if(e.target.value == 3)
    this.setState({todoItem:this.state.sort(function (a, b) {
        return a.deadline.localeCompare(b.name);
    })})
    else
    this.setState({todoItem:this.state.sort(function (a, b) {
        return a.date.localeCompare(b.name);
    })})
    
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Link to="/addtodolistitem" className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create To-Do Task</i>
          </Link>

          <div class="btn btn-primary mb-3">
            <select
              onClick={this.order}
              class="form-control form-control-lg"
              name="order"
            >
              <option value={0}>Order To-Do List</option>
              <option value={1}>By Name</option>
              <option value={2}>By Deadline</option>
              <option value={3}>By Date</option>
            </select>
          </div>

          <div class="btn btn-primary mb-3">
            <select
              onClick={this.filter}
              class="form-control form-control-lg"
              name="filter"
            >
              <option value={0}>Show All </option>
              <option value={1}>Show Completed</option>
              <option value={2}>Show In Progress</option>
            </select>
          </div>

          <div class=" form-control form-control-lg">
            <input
              type="text"
              class="form-control form-control-lg"
              name="searchText"
              placeholder="Search By Text"
              onClick={this.search}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-secondary text-white">
                    <h3>TO DO</h3>
                  </div>
                </div>
                {this.state.todoItem
                  .filter(item => item.status == 1)
                  .map((item, index) => (
                    <div className="card mb-1 bg-light">
                      <div className="card-header text-primary">
                        Name:{item.name} -- Priority: {item.priority}
                      </div>
                      <div className="card-body bg-light">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-truncate ">
                          {item.description}
                        </p>
                        <Link
                          to={`/updatetodolistitem/${item.id}`}
                          className="btn btn-primary"
                        >
                          View / Update
                        </Link>
                        <Link
                          onClick={this.onClick()}
                          className="btn btn-primary"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-primary text-white">
                    <h3>In Progress</h3>
                  </div>
                </div>
                {this.state.todoItem
                  .filter(item => item.status == 2)
                  .map((item, index) => (
                    <div className="card mb-1 bg-light">
                      <div className="card-header text-primary">
                        Name:{item.name} -- Priority: {item.priority}
                      </div>
                      <div className="card-body bg-light">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-truncate ">
                          {item.description}
                        </p>
                        <a href className="btn btn-primary">
                          View / Update
                        </a>
                        <button className="btn btn-danger ml-4">Delete</button>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-success text-white">
                    <h3>Done</h3>
                  </div>
                </div>
                {this.state.todoItem
                  .filter(item => item.status == 3)
                  .map((item, index) => (
                    <div className="card mb-1 bg-light">
                      <div className="card-header text-primary">
                        Name:{item.name} -- Priority: {item.priority}
                      </div>
                      <div className="card-body bg-light">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-truncate ">
                          {item.description}
                        </p>
                        <a href className="btn btn-primary">
                          View / Update
                        </a>
                        <button className="btn btn-danger ml-4">Delete</button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoItem: state.todoItem,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { fetchTodoItem, deleteTodoItem }
)(TodoItem);
