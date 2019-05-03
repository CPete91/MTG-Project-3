import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <Form className="form-container">
          <h1 className="form-h1">Welcome</h1>
          <FormGroup>
            <Label className="form-label" for="email">
              Email
            </Label>
            <Input type="email" name="email" id="email" placeholder="" />
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
            />
          </FormGroup>
          <div className="btn-wrapper">
            <button className="form-btn ">Log In</button>
            <button className="form-btn ">Sign Up</button>
          </div>
        </Form>
      </div>
    );
  }
}
