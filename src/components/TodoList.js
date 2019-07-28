import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

export class TodoList extends Component {
    
    render() {
        return (
            <div className="container">
                        <div className="card card-body bg-light mb-3">
                            <div className="row">
                                <div className="col-2">
                                    <span className="mx-auto"></span>
                                </div>
                                <div className="col-lg-6 col-md-4 col-8">
                                    <h3>{this.props.name}</h3>
                                    <p>{this.props.description}</p>
                                </div>
                                <div className="col-md-4 d-none d-lg-block">
                                    <ul className="list-group">
                                    <Link to={`/todo-items/${this.props.id}`}>                                
                                            <li className="list-group-item board">
                                                <i className="fa fa-flag-checkered pr-1">To-Do List Board </i>
                                            </li>
                                     </Link>
                                     <Link to={`/updatetodolist/${this.props.id}`}>                                    
                                            <li className="list-group-item board">
                                                <i className="fa fa-flag-checkered pr-1">Update To-Do Info </i>
                                            </li>
                                     </Link>                                            
                                     <Link to="/todo-items">
                                            <li className="list-group-item delete">
                                                <i className="fa fa-minus-circle pr-1">Delete To-Do</i>
                                            </li>
                                    </Link>  
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}
  
  export default TodoList