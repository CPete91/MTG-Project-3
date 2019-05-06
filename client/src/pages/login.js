import React, { Component } from "react";
import LoginForm from "../components/login-form";
import "../animate.css";
class Login extends Component {
  render() {
    return (
      <section className="section-mgt">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="brand-container">
                <img
                  className="logo logo-login"
                  src={require("../assets/img/mgt-logo.png")}
                />

                <h1 className="mgt-h1 fadeIn">DECK BUILDER</h1>
              </div>
            </div>
          </div>

          <LoginForm />
        </div>
      </section>
    );
  }
}

export default Login;
