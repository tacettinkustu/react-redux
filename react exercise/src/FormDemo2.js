import React, { Component } from "react";
import alertify from "alertifyjs";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";

export default class FormDEmo2 extends Component {
  state = { email: "", password: "", description: "",city:"" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.email,this.state.password,this.state.description,this.state.city!==""){
        alertify.success(this.state.email + " added to db!");
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
          <Label for="city">City</Label>
          <Input type="select" name="city" id="city" onChange={this.handleChange}>
                <option>Berlin</option>
                <option>Dublin</option>
                <option>London</option>
                <option>Monaco</option>
                <option>New York</option>
                <option>Paris</option>
          </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
