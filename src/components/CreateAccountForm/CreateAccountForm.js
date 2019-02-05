import React from 'react'
//import TextField from '@material-ui/core/TextField';

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
      return(
        <div className="CreateAccountForm">
          <p>SSID:</p>
          <input id="SSID" type="text" value={this.state.ssid} onChange={this.onSSIDChange} autoFocus/>
          <br/>
          <p>First Name:</p>
          <input id="FistName" type="text" value={this.state.first} onChange={this.onFirstChange}/>
          <br/>
          <p>Last Name:</p>
          <input id="SecondName" type="text" value={this.state.last} onChange={this.onLastChange}/>
          <br/>
          <p>Bellevue College Email:</p>
          <input id="Email" type="text" value={this.state.email} onChange={this.onEmailChange}/>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </div>
      )
        /*return (
            <div className="CreateAccountForm" >
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
              <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
            </div>
        )*/
    }
}