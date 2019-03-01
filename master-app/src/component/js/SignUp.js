import React, { Component } from 'react';
import '../css/SignInUp.css'

class SignUpInput extends Component {
    render() {
        return (
            <div className="inputDiv">
                <p className="text">{this.props.name}</p>
                <input className="input"/>
            </div>
        );
    }
}

export default class SignUp extends Component {
    render() {
        return (
            <div className="mainBlock">
                <p className="textTitle">Inscription</p>
                <div className="inputBlock">
                    <SignUpInput name="Nom de compte"/>
                    <SignUpInput name="Email"/>
                    <SignUpInput name="Mot de Passe"/>
                </div>
                <button className="button">Valider</button>
            </div>
        );
    }
}