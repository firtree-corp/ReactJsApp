import TYPES from './types';
import UserService from '../services/userService';

const disableError = (dispatch) => {
    dispatch({
        type: TYPES.DISABLE_LOG_ERROR
    });
}

export const connectUser = (user, password) => {
    return (dispatch) => {
        dispatch({ type: TYPES.CONNECT });
        UserService.logIn({user: user, password: password})
        .then(data => connectUserSuccess(dispatch, data.token))
        .catch(() => {
            setTimeout(() => {
                disableError(dispatch);
            }, 10000);
            connectUserFailure(dispatch);
        });
    };
};

export const signUser = (user, mail, password) => {
    return (dispatch) => {
        dispatch({ type: TYPES.SIGN });
        UserService.logUp({user: user, mail: mail, password: password})
        .then(() => signUserSuccess(dispatch))
        .catch((error) => {
            setTimeout(() => {
                disableError(dispatch);
            }, 10000);
            signUserFailure(dispatch, error);
        });
    };
};

const connectUserFailure = (dispatch) => {
    dispatch({
        type: TYPES.CONNECT_FAILURE,
    });
}

const connectUserSuccess = (dispatch, token) => {
    dispatch({
        type: TYPES.CONNECT_SUCCESS,
        payload: token
    });
}

const signUserFailure = (dispatch, error) => {
    const msg = ["Les champs obligatoire Nom de compte, Email ou Mot de passe ne sont pas tous remplis",
    "Nom de compte invalide", "Nom de compte déjà utilisé", "Email déjà utilisé",
    "Un problème est survenu, veuillez réessayer plus tard"]

    error.then(function(obj) {
        dispatch({
            type: TYPES.SIGN_FAILURE,
            msg: msg[obj.value]
        })
    })
}

const signUserSuccess = (dispatch) => {
    dispatch({
        type: TYPES.SIGN_SUCCESS,
        msg: "Un mail de confirmation vous a été envoyé afin de vous connecter"
    })
}