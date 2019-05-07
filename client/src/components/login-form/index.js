import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import API from "../../utils/API";


const signUp = (password, username, e) => {
  console.log(username);
  console.log("Pressed Signup");
  e.preventDefault();
  API.signUp({ userName: username, password: password }).then(data => {

    if (data.data.uid) {
      console.log(data);
    } else {

    }




  });
}

const checker = (password, username, e) => {
  e.preventDefault();

  API.login({ userName: username, password: password }).then(data => {

    if (data.data.uid) {
      console.log(data);
    } else {

    }

  });
}

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(evt) {
    this.setState({ username: evt.target.value });
  }

  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }


  render() {
    return (
      <div>
        <Form className="form-container">
          <h1 className="form-h1">Welcome</h1>
          <FormGroup>
            <Label className="form-label" for="email">
              Email
            </Label>
            <Input type="email" name="email" id="email" placeholder="" value={this.state.username} onChange={this.handleEmailChange} />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="password">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </FormGroup>
          <div className="btn-wrapper">
            <button className="form-btn " onClick={e => { checker(this.state.password, this.state.username, e) }}>Log In</button>
            <button className="form-btn " onClick={e => { signUp(this.state.password, this.state.username, e) }}>Sign Up</button>
          </div>
        </Form>
      </div>
    );
  }
}
