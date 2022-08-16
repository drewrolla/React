import React, { Component } from 'react'
import Click from './Click';
import Home from './Home';
import Idk from './Idk';
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/click' element={<Click />} />
            <Route path='/idk' element={<Idk />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    )
  }
}
