import React, { Component } from 'react'

export default class login extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      test: 'Hello from login'
    }
  }
  render() {
    return (
      <div>
        <div>
          {this.state.test}
        </div>
      </div>
    )
  }
  
}