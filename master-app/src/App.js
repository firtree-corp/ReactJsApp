import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import CreateTemplate from "./component/Template/js/CreateTemplate.js";
import Login from './component/Login/js/Login.js';
import theme from './theme/Theme'
import Store from './store/Store'
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={Store}>
            <MuiThemeProvider theme={theme}>
                <div>
                    <Login/>
                </div>
            </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;
