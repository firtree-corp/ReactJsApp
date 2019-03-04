import React, { Component } from 'react';
import SignIn from './SigIn';
import SignUp from './SignUp';
import '../css/Login.css'

export default class Login extends Component {
    render() {
        return (
            <div className="Home">
                <SignIn/>
                <SignUp/>
            </div>
        );
    }
}