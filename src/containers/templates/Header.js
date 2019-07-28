import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

class Header extends Component {   
        constructor() {
          super();   
          this.state = {
            username: "",
          };
         
        }
        componentWillMount() {
            this.setState(this.props.auth.username)
        }
    render() {   
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">     
            <Link to="/" className="navbar-brand">To-Do Application</Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>
  
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">                    
                        <Link to="/" className="nav-link">Dashboard</Link>   
                    </li>
                </ul>
                {this.state.username > 2 ? 
                      <div className="collapse navbar-collapse" id="mobile-nav">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item">                    
                             Welcome {this.state.username}
                          </li>
                      </ul>
                        </div>
                    :  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link to="/register" className="nav-link">Sign Up</Link>   
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>   
                    </li>
                </ul> }
              
            </div>
        </div>
    </nav>
    )
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
  })
  export default connect(
    mapStateToProps,
    {  }
  )(Header);

