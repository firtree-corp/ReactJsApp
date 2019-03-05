import React, { Component } from 'react';
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import SignIn from './SigIn';
import SignUp from './SignUp';
import '../css/Login.css'

class Login extends Component {
    render() {
        return (
            <div className="homeBlock">
                <p className="title">FirTree JDR</p>
                <div className="signBlock">
                    <SignIn/>
                    <SignUp/>
                </div>
                <Snackbar open={this.props.signIn.error} message="Identifiant ou Mot de Passe invalide"/>
                <Snackbar open={this.props.signUp.error} message={this.props.signUp.msg}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        signIn: state.userSignIn,
        signUp: state.userSignUp
	}
}

export default connect(mapStateToProps)(Login)