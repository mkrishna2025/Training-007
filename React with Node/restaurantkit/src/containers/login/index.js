import React from 'react';

import './login.css';
import avatar from '../../images/img_avatar2.png';


export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errorUsername: '',
            errorPassword: '',
            errorMessages: []
        }
    }

    onLogin(){
        var isValid = true;
        var errorUsername = '';
        var errorPassword = '';
        var messages = [];

        if(this.state.username == ''){
            errorUsername = 'Please enter Username';
            messages.push(errorUsername);
            isValid = false;
        }

        if(this.state.password == ''){
            errorPassword = 'Please enter Password';
            messages.push(errorPassword);
            isValid = false;
        }

        this.setState({ 
            errorUsername: errorUsername, 
            errorPassword: errorPassword,
            errorMessages: messages
        });
        
        if(isValid){
            alert(JSON.stringify(this.state));
        }
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
                    <span style={{ color: 'red' }}>{this.state.errorUsername}</span>
                    <br/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required onChange={ event => this.state.password = event.target.value } />
                    <span style={{ color: 'red' }}>{this.state.errorPassword}</span>
                    <br/>
                        {this.state.errorMessages.map(item => <li>{item}</li>)}
                    <br/>
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