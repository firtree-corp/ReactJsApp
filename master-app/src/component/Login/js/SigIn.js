import React, { Component } from 'react';
import { connectUser } from "../../../actions/index"
import { connect } from 'react-redux';
import '../css/SignInUp.css'

class SignInInput extends Component {
    render() {
        return (
            <div className="inputDiv">
                <p className="text">{this.props.name} :</p>
                <input className="input" value={this.props.value} type={this.props.type} onChange={(value) => {this.props.func(value)}}/>
            </div>
        );
    }
}

class SignIn extends Component {
    constructor() {
        super()
        this.state = {ident: "", pwd: ""}
        this.handleIdent = this.handleIdent.bind(this)
        this.handlePwd = this.handlePwd.bind(this)
    }

    handleConnection = () => {
        const { connectUser } = this.props;
        const { ident, pwd } = this.state;

        connectUser(ident, pwd);
    }

    handleIdent(ident) {
        this.setState({ident: ident.target.value})
    }

    handlePwd(pwd) {
        this.setState({pwd: pwd.target.value})
    }

    render() {
        return (
            <div className="mainBlock">
                <p className="textTitle">Connexion</p>
                <div className="inputBlock">
                    <SignInInput name="Email ou Nom de compte" type="text" func={this.handleIdent} value={this.state.ident}/>
                    <SignInInput name="Mot de passe" type="password" func={this.handlePwd} value={this.state.pwd}/>
                </div>
                <button className="button" onClick={this.handleConnection}>Valider</button>
            </div>
        );
    }
}

export default connect(null, { connectUser })(SignIn)