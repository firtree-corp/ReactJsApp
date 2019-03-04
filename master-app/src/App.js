import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import CreateTemplate from "./component/Template/js/CreateTemplate.js";
import Login from './component/Login/js/Login.js';
import './App.css';
import theme from './theme/Theme'

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
        <div>
            <CreateTemplate/>
        </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
