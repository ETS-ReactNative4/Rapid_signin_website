import React from 'react'
import TextField from '@material-ui/core/TextField';

export class CreateAccountForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {ssid: "", first: "", last: "", email: ""};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      const target = event.target;

      this.setState({
        ssid: target.ssid,
        first: target.first,
        last: target.last,
        email: target.email
      });
    }

    handleSubmit(event){
      const state = this.state;
      window.location = window.location +
                        "/new_student?ssid=" + state.ssid +
                        "&first" + state.first +
                        "&last" + state.last +
                        "&email" + state.email;
      event.preventDefault();
    }


    render(){
        return (
            <form class="CreateAccountForm" onSubmit={this.handleSubmit}>
               <TextField
               id="SSID"
               label=""
               value={this.state.ssid}
               placeholder="SSID"
               className="TextField"
               margin="normal"
               onChange={this.handleChange}
               autoFocus
               />
               <br />
               <TextField
               id="FirstName"
               label=""
               value={this.state.first}
               placeholder="First Name"
               className="TextField"
               margin="normal"
               onChange={this.handleChange}
               autoFocus
               />
               <TextField
               id="LastName"
               label=""
               value={this.state.last}
               placeholder="LastName"
               className="TextField"
               margin="normal"
               onChange={this.handleChange}
               autoFocus
               />
               <br />
               <TextField
               id="Email"
               label=""
               value={this.state.email}
               placeholder="E-mail"
               className="TextField"
               margin="normal"
               onChange={this.handleChange}
               autoFocus
               />
              <input type="submit" value="Submit"/>
            </form>
        )
    }
}