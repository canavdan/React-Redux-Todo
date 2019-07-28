import React, { Component } from 'react'
import Header from '../containers/templates/Header';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { createUser } from '../actions'
class Registration extends Component {
    constructor() {
        super();   
        this.state = {
          username: "",
          password: "",
          email:"",
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
      }
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();  
        this.props.createUser(this.state.username,this.state.password,this.state.email);
        if(this.props.auth.error){
            alert(this.props.auth.error)
          }
      }
  render() {
    return (
      <div>
        <Header/>
         <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Sign Up</h1>
                    <p className="lead text-center">Create your Account</p>
                    <form action="create-profile.html">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Username" name="username"
                                 required minLength="4"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />

                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" 
                            required minLength="4"/>
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
    { createUser }
  )(Registration);
