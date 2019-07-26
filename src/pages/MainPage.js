import React, { Component } from 'react'
import Header from '../containers/templates/Header';
import { Link } from 'react-router-dom';
export class MainPage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
    <div className="landing">
        <div className="light-overlay landing-inner text-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4">To-Do Application</h1>
                        <p className="lead">
                            Create your account to join active projects or start you own
                        </p>
                        <hr />
                        <Link to="/register" className="btn btn-lg btn-primary mr-2">Sign Up</Link>   
                        <Link to="/login" className="btn btn-lg btn-secondary mr-2">Login</Link>   
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default MainPage
