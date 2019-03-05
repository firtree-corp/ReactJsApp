import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import UserSignInReducer from './reducers/UserSignInReducer';
import UserSignUpReducer from './reducers/UserSignUpReducer';

const reducers = combineReducers({
    userSignIn: UserSignInReducer,
    userSignUp: UserSignUpReducer
});

export default createStore(reducers, {}, applyMiddleware(ReduxThunk));