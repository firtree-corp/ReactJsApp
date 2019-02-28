import React, { Component } from 'react';
import SignIn from './SigIn';
import '../css/Login.css'

export default class Login extends Component {
    render() {
        return (
            <div className="Home">
                <SignIn/>
            </div>
        );
    }
}