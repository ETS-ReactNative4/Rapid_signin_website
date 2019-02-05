import React from 'react'
import TextField from '@material-ui/core/TextField';

export class CreateAccountForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {ssid: "", first: "", last: "", email: ""};

      this.onSSIDChange = this.onSSIDChange.bind(this);
      this.onFirstChange = this.onFirstChange.bind(this);
      this.onLastChange = this.onLastChange.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    onSSIDChange(event) {
      this.setState({ssid: event.target.value});
    }

    onFirstChange(event) {
      this.setState({first: event.target.value});
    }

    onLastChange(event) {
      this.setState({last: event.target.value});
   }

   onEmailChange(event) {
      this.setState({email: event.target.value});
    }

    handleSubmit(event){
      const state = this.state;
      window.location = window.location +
                        "new_student?ssid=" + state.ssid +
                        "&first" + state.first +
                        "&last" + state.last +
                        "&email" + state.email;
      event.preventDefault();
    }


    render(){
      /*return(
        <div className="CreateAccountForm">
          <input id="SSID" type="text" value={this.state.ssid} onChange={this.onSSIDChange}/>
          <input id="FistName" type="text" value={this.state.first} onChange={this.onFirstChange}/>
          <input id="SecondName" type="text" value={this.state.last} onChange={this.onLastChange}/>
          <input id="Email" type="text" value={this.state.email} onChange={this.onEmailChange}/>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </div>
      )*/
        return (
            <div className="CreateAccountForm" >
               <TextField
               id="SSID"
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
               value={this.state.first}
               placeholder="First Name"
               className="TextField"
               margin="normal"
               onChange={this.handleChange}
               />
               <TextField
               id="LastName"
               value={this.state.last}
               placeholder="LastName"
               className="TextField"
               margin="normal"
               onChange={this.handleChange}
               />
               <br />
               <TextField
               id="Email"
               value={this.state.email}
               placeholder="E-mail"
               className="TextField"
               margin="normal"
               onChange={this.handleChange}
               />
              <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}