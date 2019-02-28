import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typo from '@material-ui/core/Typography'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/Theme'

class HomeAppBar extends Component {
    render() {
        return (
            <AppBar style={style.homeSidebar}>
                <MuiThemeProvider theme={theme}>
                    <Typo variant="h5" color="primary">Test</Typo>
                </MuiThemeProvider>
            </AppBar>
        );
    }
}

export default class Home extends Component {
    render() {
        return (
            <div style={style.home} onClick={this.toggleSide}>
                <HomeAppBar/>
            </div>
        );
    }
}

const style = {
    home: {
        background: 'white',
        minHeight: '100vh',
        display: 'flex',
    },
    homeSidebar: {
        background: '366a8a',
        minHeight: '5vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeDivider: {
        borderLeft: '2px solid white',
        height: '2em',
        margin: '0em 1em'
    }
}