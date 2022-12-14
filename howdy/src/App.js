import React, { Component } from 'react';
import Move from './Move';
import Home from './Home';
import Idk from './Idk';
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TodoList from './TodoList';
import TodoList2 from './TodoList2';
import Login from './views/Login';
import Signup from './views/Signup';
import TodoList3 from './TodoList3';


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
            <Route path='/todoList2' element={<TodoList2 />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/todoList3' element={<TodoList3 />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    )
  }
}
