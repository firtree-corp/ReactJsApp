import React, { Component } from 'react';
import '../css/SignInUp.css'

class SignInInput extends Component {
    render() {
        return (
            <div className="inputDiv">
                <p className="text">{this.props.name}</p>
                <input className="input"/>
            </div>
        );
    }
}

export default class SignIn extends Component {
    render() {
        return (
            <div className="mainBlock">
                <p className="textTitle">Connexion</p>
                <div className="inputBlock">
                    <SignInInput name="Email ou Nom de compte"/>
                    <SignInInput name="Mot de Passe"/>
                </div>
                <button className="button">Valider</button>
            </div>
        );
    }
}