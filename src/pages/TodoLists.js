import React, { Component } from 'react'
import Header from '../containers/templates/Header';
import { Link } from 'react-router-dom';
export class TodoLists extends Component {
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
                    <div className="container">
                        <div className="card card-body bg-light mb-3">
                            <div className="row">
                                <div className="col-2">
                                    <span className="mx-auto">REACT</span>
                                </div>
                                <div className="col-lg-6 col-md-4 col-8">
                                    <h3>Spring / React Project</h3>
                                    <p>Project to create a Kanban Board with Spring Boot and React</p>
                                </div>
                                <div className="col-md-4 d-none d-lg-block">
                                    <ul className="list-group">
                                    <Link to="/todo-items">                                   
                                            <li className="list-group-item board">
                                                <i className="fa fa-flag-checkered pr-1">To-Do Board </i>
                                            </li>
                                     </Link>
                                     <Link to="/addtodolist">                                   
                                            <li className="list-group-item board">
                                                <i className="fa fa-flag-checkered pr-1">Update To-Do Info </i>
                                            </li>
                                     </Link>                                            
                                        <a href="">
                                            <li className="list-group-item delete">
                                                <i className="fa fa-minus-circle pr-1">Delete To-Do</i>
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default TodoLists
