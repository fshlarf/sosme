import React, { Component } from 'react'
import axios from 'axios'

export default class reg extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      fullName: '',
      email: '',
      password: ''
    }
  }
  handleFullname = (e) => {this.setState({fullName: e.target.value})}
  handleEmail = (e) => {this.setState({email: e.target.value})}
  handlePassword = (e) => {this.setState({password: e.target.value})}

  addUser = (e) => {
    // this.setState({
    //   fullName: this.state.fullName
    // })
    console.log(this.state.fullName);
    axios.post('')
    
  }
  render() {
    return (
      <div>
        <form>
        <div className="form-group">
            <label>Full Name</label>
            <input type="email" className="form-control" onChange={this.handleFullname}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" onChange={this.handleEmail}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.addFullName}>Submit</button>
        </form>
      </div>
    )
  }
  
}