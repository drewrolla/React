import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand">¯\_(ツ)_/¯</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/move">Move</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/idk">Elsewhere</Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link" to="/todoList">Todo (RCC)</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/todoList2">Todo</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
      </div>
    )
  }
}
