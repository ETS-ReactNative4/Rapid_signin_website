import React from 'react'
import TextField from '@material-ui/core/TextField';

export class CreateAccountForm extends React.Component{
    render(){
        return (
            <TextField
            id="SSID"
            label=""
            placeholder="SSID"
            className="TextField"
            margin="normal"
            autoFocus
            />
            <TextField
            id="FirstName"
            label=""
            placeholder="First Name"
            className="TextField"
            margin="normal"
            autoFocus
            />
            <TextField
            id="LastName"
            label=""
            placeholder="LastName"
            className="TextField"
            margin="normal"
            autoFocus
            />
            <TextField
            id="Email"
            label=""
            placeholder="E-mail"
            className="TextField"
            margin="normal"
            autoFocus
            />
        )
    }
}