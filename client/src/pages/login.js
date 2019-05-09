import React, { Component } from "react";
import LoginForm from "../components/login-form";
import {
  withRouter
} from 'react-router-dom'


class Login extends Component {


  componentDidMount() {

    sessionStorage.setItem("uid", false);
    sessionStorage.setItem("deck", false);
    console.log(sessionStorage.getItem("uid"));
  }


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

                <h1 className="mgt-h1">DECK BUILDER</h1>
              </div>
            </div>
          </div>

          <LoginForm {...this.props} />
        </div>
      </section>
    );
  }
}

export default withRouter(Login);
