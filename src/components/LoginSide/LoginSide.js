import React from 'react';
import './LoginSide.css';
import {LoginForm} from "../LoginForm/LoginForm";
import {CreateAccountForm} from '../CreateAccountForm/CreateAccountForm';

export class LoginSide extends React.Component{
    render(){
        return(
            <div className="LoginSide">
                <div className="TitleSpace">
                    <h1 className="TitleText">Sign in/out of the Makerspace</h1>
                </div>
                <div className="LowerHalf">
                    <div className="LoginFormDiv">
                        <CreateAccountForm />
                    </div>
                </div>
            </div>
        )
    }
}