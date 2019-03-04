import React, { Component } from 'react';
import Login from './component/Login.js';
import CreateTemplate from "./component/CreateTemplate.js";
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme/Theme'
import ReactDragList from 'react-drag-list'
import { Button } from '@material-ui/core';

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
