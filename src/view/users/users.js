import React, { Component } from 'react'

export default class users extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      test: 'Hello from users'
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