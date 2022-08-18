import React, { Component } from 'react'

export default class Signup extends Component {

    sendSignUpInfo = async (e) => {
        e.preventDefault();

        if (e.target.password.value !== e.target.confirmPassword.value){ // makes sure pw and confirmed pw match
            return
        }

        const res = await fetch('', { // need to put in flask app localhost signup page redirect thing, for now will leave blank (i.e. 'http://localhost:5000/api/signup')
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            })
        });
        const data = await res.json();
        console.log(data)
    };

  render() {
    return (
        <form className='container col-4' onSubmit={(e)=>{this.sendSignUpInfo(e)}}>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="username" class="form-control" name="username" />
            </div>


            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" name='email' />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" name='password' />
            </div>
            <div class="mb-3">
                <label for="confirm-password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" name='confirm_password' />
            </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    )
  }
}
