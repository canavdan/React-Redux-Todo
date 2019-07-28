import React, { Component } from 'react'
import Header from '../containers/templates/Header';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { loginUser } from '../actions'
class LoginPage extends Component {
  constructor() {
    super();   
    this.state = {
      username: "",
      password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
  }
onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}
onSubmit(e) {
    e.preventDefault();  
    this.props.loginUser(this.state.username,this.state.password);
    if(this.props.auth.error){
      alert(this.props.auth.error)
    }
    this.props.history.push(`/todo-lists/${this.props.auth.user.id}`);
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="login">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <form action="todo-lists.html" onSubmit={this.onSubmit}>>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" 
                            onChange={this.onChange}
                            placeholder="Username" name="username" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" 
                            onChange={this.onChange} placeholder="Password" name="password" />
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
const mapStateToProps = state => ({
  auth: state.auth,
})
export default connect(
  mapStateToProps,
  { loginUser }
)(LoginPage);

