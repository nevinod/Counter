import React, { Component, useState } from 'react'
import { Display } from './Display.js'

class ClassApp extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  render() {
    return (
      <div>
        <div>You pressed the count button {this.state.count} times</div>
        <button onClick={() =>
          this.setState({count: this.state.count + 1})
        }>Click</button>
      </div>
    )
  }
}

export default ClassApp
