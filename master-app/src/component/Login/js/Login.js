import React, { Component } from 'react';
import SignIn from './SigIn';
import SignUp from './SignUp';
import '../css/Login.css'

export default class Login extends Component {
    render() {
        return (
            <div className="homeBlock">
                <p className="title">FirTree JDR</p>
                <div className="signBlock">
                    <SignIn/>
                    <SignUp/>
                </div>
            </div>
        );
    }
}