import React, { Component } from 'react'
import Header from '../containers/templates/Header';
import { Link } from 'react-router-dom';
export class LoginPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="login">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <form action="todo-lists.html">
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default LoginPage
