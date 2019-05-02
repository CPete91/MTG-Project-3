import React, { Component } from "react";
import LoginForm from "../components/login-form";

class Login extends Component {
  render() {
    return (
      <section className="section-mgt">
        <div className="container">
          <div className="brand-container">
            <img
              className="logo logo-login"
              src={require("../assets/img/mgt-logo.png")}
            />

            <h1 className="mgt-h1">DECK BUILDER</h1>
          </div>
          <LoginForm />
        </div>
      </section>
    );
  }
}

export default Login;
