import React from 'react'
import TextField from '@material-ui/core/TextField';

export class LoginForm extends React.Component{
    render(){
        return (
            <TextField
                id="SSID Text Field"
                label="SSID"
                placeholder=""
                className="SSID Text Field"
                margin="normal"
                autoFocus
            />

        )
    }
}