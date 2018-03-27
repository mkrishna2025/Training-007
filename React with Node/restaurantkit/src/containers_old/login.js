import React from 'react';

import './login.css';
import avatar from './img_avatar2.png'


export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onLogin(){
        alert(JSON.stringify(this.state));
    }

    render(){
        return (
            <div>
                <h2>Welcome to Restaurant Portal, Please Login</h2>
                <div class="imgcontainer">
                    <img src={avatar} alt="Avatar" class="avatar" />
                </div>
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required onChange={ event => this.state.username = event.target.value }/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required onChange={ event => this.state.password = event.target.value } />
                        
                    <button type="submit" onClick={this.onLogin.bind(this)}>Login</button>
                    <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>
                <div class="container" style={{ "background-color":"#f1f1f1"}} >
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
            </div>
        );
    }
}