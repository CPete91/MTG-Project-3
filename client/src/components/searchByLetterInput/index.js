import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class SearchLetterField extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Form className="form-container">
          <FormGroup>
            <Label className="form-label" for="search">
              Search Card By Letter
            </Label>
            <Input
              name="search-letter"
              type="text"
              maxLength="1"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}
