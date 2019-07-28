import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../containers/templates/Header';
import { Link } from 'react-router-dom';
import { fetchTodoItem } from '../actions'

 class TodoItem extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;  
        this.props.fetchTodoItem(params.id);
    }
    
  render() {
    return (
      <div>
          <Header/>    
        <div className="container">
        <Link to="/addtodolistitem" className="btn btn-primary mb-3">                                   
        <i className="fas fa-plus-circle"> Create To-Do Task</i>
         </Link>
      
        <br />
        <hr />
        <div className="container">
            <div className="row">
                
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>
                      {this.props.todoItem.todoItem.filter(item => item.status == 1).map((item, index) => (                        
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
                              <button className="btn btn-danger ml-4">
                                  Delete
                              </button>
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
                    {this.props.todoItem.todoItem.filter(item => item.status == 2).map((item, index) => (                        
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
                              <button className="btn btn-danger ml-4">
                                  Delete
                              </button>
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
                    {this.props.todoItem.todoItem.filter(item => item.status == 3).map((item, index) => (                        
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
                              <button className="btn btn-danger ml-4">
                                  Delete
                              </button>
                          </div>
                      </div>
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
    todoItem: state.todoItem,
})
export default connect(
    mapStateToProps,
    { fetchTodoItem }
  )(TodoItem);

