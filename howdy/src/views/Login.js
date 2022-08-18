import React, { Component } from 'react'

export default class Login extends Component {

    sendLoginInfo = async (e) => {
        e.preventDefault();

        const url = ''
        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        const options = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)

    }


  render() {
    return (
        <form className='container col-4' onSubmit={(e)=>{this.sendLoginInfo(e)}}>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="username" class="form-control" name="username" />
            </div>


            
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" name='password' />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
  }
}
