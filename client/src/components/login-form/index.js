import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import API from "../../utils/API";


const bcrypt = require('bcrypt');
const saltRounds = 10;

// const hasher = (password) => {
// bcrypt.genSalt(saltRounds, function (err, salt) {
// bcrypt.hash(password, salt, function (err, hash) {
// API.signUp({ userName: this.state.username, password: hash });
// });
// });
// }

const checker = (password, username) => {

  // API.login({ userName: username, password: password });
}

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    //this.handleChange = this.handleChange.bind(this);
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
            <Input type="email" name="email" id="email" placeholder="" value={this.state.username} /*onChange={this.handleChange}*/ />
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
            //onChange={this.handleChange}
            />
          </FormGroup>
          <div className="btn-wrapper">
            <button className="form-btn " onClick={checker(this.state.password, this.state.username)}>Log In</button>
            <button className="form-btn " /* onClick={hasher(this.state.password)}*/>Sign Up</button>
          </div>
        </Form>
      </div>
    );
  }
}
