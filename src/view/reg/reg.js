import React, { Component } from 'react'
import axios from 'axios'

export default class reg extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      userName: '',
      fullName: '',
      email: '',
      password: ''
    }
  }
  handleUsername = (e) => {this.setState({userName: e.target.value})}
  handleFullname = (e) => {this.setState({fullName: e.target.value})}
  handleEmail = (e) => {this.setState({email: e.target.value})}
  handlePassword = (e) => {this.setState({password: e.target.value})}

  addUser = (e) => {
    e.preventDefault()
    let verifAddUser = this.state.userName && this.state.fullName && this.state.email && this.state.password
    if (verifAddUser) {
      this.postUser()
    } else { alert('Data belum lengkap') }
  }
  postUser() {
    axios.post('http://localhost:3001/users', {
      userName: this.state.userName,
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      alert('Kamu berhasil registrasi')
      this.props.history.push('/')
    })
    .catch(err => {
      console.error(err);
    })
  }
  render() {
    return (
      <div>
        <h4 align="center">Registrasi</h4>
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input type="text" className="form-control" onChange={this.handleUsername}/>
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-control" onChange={this.handleFullname}/>
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" onChange={this.handleEmail}/>
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" onChange={this.handlePassword}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.addUser}>Submit</button>
        </form>
      </div>
    )
  }
  
}