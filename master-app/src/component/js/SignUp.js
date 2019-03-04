import React, { Component } from 'react';
import '../css/SignInUp.css'

class SignUpInput extends Component {
    render() {
        return (
            <div className="inputDiv">
                <p className="text">{this.props.name} :</p>
                <input className="input" value={this.props.value} type={this.props.type} onChange={(value) => {this.props.func(value)}}/>
            </div>
        );
    }
}

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {user: "", mail: "", pwd: ""}
        this.handleUser = this.handleUser.bind(this)
        this.handleMail = this.handleMail.bind(this)
        this.handlePwd = this.handlePwd.bind(this)
    }

    handleUser(user) {
        this.setState({user: user.target.value})
    }

    handleMail(mail) {
        this.setState({mail: mail.target.value})
    }

    handlePwd(pwd) {
        this.setState({pwd: pwd.target.value})
    }

    render() {
        return (
            <div className="mainBlock">
                <p className="textTitle">Inscription</p>
                <div className="inputBlock">
                    <SignUpInput name="Nom de compte" type="text" func={this.handleUser} value={this.state.user}/>
                    <SignUpInput name="Email" type="email" func={this.handleMail} value={this.state.mail}/>
                    <SignUpInput name="Mot de Passe" type="password" func={this.handlePwd} value={this.state.pwd}/>
                </div>
                <button className="button">Valider</button>
            </div>
        );
    }
}