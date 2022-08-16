import React, { Component } from 'react'

// testing this out: https://reactjs.org/docs/render-props.html

export default class Click extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0};
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

  render() {
    return (
      <div className='mouse' style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <p>Move the Mouse around! Current Mouse position: ({this.state.x}, {this.state.y})</p>
      </div>
    )
  }
}
