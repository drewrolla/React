import React, { Component } from 'react';
import TodoNav from './components/TodoNav';
import TodoRows from './components/TodoRows';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                { action: 'Go to Gym', done: false },
                { action: 'Do HW', done: false }
            ],
            newTodo: '',
        };
    }

    todoRows = () => 
        this.state.todoItems.map((item) => (
            <TodoRows key={item.action} item={item} callback={this.toggleDone} />
        ));

    toggleDone = (todo) => 
        this.setState({
            todoItems: this.state.todoItems.map((item) => 
            item.action === todo.action ? { ...item, done: !item.done } : item),
        });


    updateValue = (e) => {
        this.setState({ newTodo: e.target.value });
    };

    newTodo = () => {
        this.setState({
            todoItems: [
                ...this.state.todoItems,
                { action: this.state.newTodo, done: false },
            ]
        });
    };

    // currently my remove and add buttons on this do the same thing and at the moment I don't have the
    // brain capacity to figure it out
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <TodoNav />
                <div className='col-12'>
                    <input className='form-control' value={this.state.newToDo} onChange={this.updateValue} placeholder="Add to list"/>
                    <button className='btn btn-success' onClick={this.newTodo}>Add</button>
                    <button className='btn btn-danger' onClick={this.newTodo}>Remove</button>
                </div>
                <div className='col-12'>
                    <table className='table'>
                        <tbody className='tableBody'>{this.todoRows()}</tbody>
                    </table>
                </div>
        </div>
      </div>
    )
  }
}
