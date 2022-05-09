import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

export class Success extends Component {  
    continuue = e => {
        e.preventDefault();
        // process form (back end)//
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
}

    render() {
        return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Success" />
                <h1>thanx for your submission</h1>
                <p>you will get an email with further instructions</p>
                

            </React.Fragment>
        </MuiThemeProvider>
    )
    }
    
}

export default Success;