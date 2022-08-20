import React, { Component } from 'react'

export default class TodoItems extends Component {

    handleClick = () => {
        const copy = {...this.props.obj, complete: !this.props.obj.complete} // create a copy bc states are immutable, complete is for the checkbox i believe, so whatever is the opposite of what state the checkbox is currently in, when you press the button it will either be checked or unchecked
        this.props.markComplete(copy, this.props.index)
    };

  render() {
    return (
      <div>
        {this.props.obj.text}
        <input type='checkbox' checked={this.props.obj.complete} />
        <button className='btn btn-success m-1' onClick={()=>{this.handleClick()}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></button>
        <button className='btn btn-danger m-1' onClick={()=>{this.props.removeFromList(this.props.index)}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></button>
      </div>
    )
  }
}
