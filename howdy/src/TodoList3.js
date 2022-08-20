import React, { Component } from 'react'
import TodoItems from './components/TodoItems';

export default class TodoList3 extends Component {
    constructor() {
        super();
        this.state = {
            todoItems : []
        }
    };

    addToList = (e) => {
        e.preventDefault(); // prevents page from auto reloading
        const thingToDo = e.target.thing.value
        const obj = {
            text: thingToDo,
            complete: false
        }
        this.setState({todoItems: this.state.todoItems.concat([obj])})
    };

    removeFromList = (index) => {
        const newList = [...this.state.todoItems]
        newList.splice(index, 1)
        this.setState({todoItems: newList})
    };

    markComplete = (newObj, index) => {
        const newList = this.state.todoItems.slice()
        newList.splice(index, 1, newObj)
        this.setState({todoItems: newList})
    };

    showList = () => {
        return this.state.todoItems.map((t, i) => <TodoItems key={i} obj={t} index={i} markComplete={this.markComplete} removeFromList={this.removeFromList}></TodoItems>)
    }

  render() {
    return (
      <div className='container'>
        <form onSubmit={(e)=>{this.addToList(e)}} >
            <input className='form-control' name='thing' />
            <button className='btn btn-primary'>Add</button>
        </form>
        {this.showList()}
      </div>
    )
  }
}
