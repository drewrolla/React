import React, { Component } from 'react';
import Move from './Move';
import Home from './Home';
import Idk from './Idk';
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TodoList from './TodoList';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Drew'
    }
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/move' element={<Move />} />
            <Route path='/idk' element={<Idk />} />
            <Route path='/todoList' element={<TodoList />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    )
  }
}
