import React, { Component } from 'react'

export default class profile extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      test: 'Hello from profile'
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