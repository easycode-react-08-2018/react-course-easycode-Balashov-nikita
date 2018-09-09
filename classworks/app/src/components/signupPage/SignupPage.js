import React, { Component } from "react";
import { emailValidation } from "./validate";
import * as api from "../../api/api";
import history from "../../history/history";

const { signupRequest } = api;

export class SignupPage extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    errorPasswordDiscription: null,
    errorEmailDiscription: null,
    errorUsernameDiscription: null
  };

  changeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    const { email, username, password } = this.state;

    if (!emailValidation(email)) {
      this.setState({
        errorEmailDiscription: "Email is not valid!"
      });
    } else {
      this.setState({
        errorPasswordDiscription: null,
        errorEmailDiscription: null,
        errorUsernameDiscription: null
      });

      const userData = {
        email: email,
        user: username,
        password
      };

      signupRequest(userData)
        .then(req => {
          console.log(req.data);
          history.push("/");
        })
        .catch(res => {
          const { message } = res.response.data;

          if (message.includes("NAME")) {
            this.setState({
              errorUsernameDiscription: message
            });
          }

          if (message.includes("EMAIL")) {
            this.setState({
              errorEmailDiscription: message
            });
          }

          if (message.includes("Пароль")) {
            this.setState({
              errorPasswordDiscription: message
            });
          }
        });
    }
  };

  render() {
    return (
      <form className="container d-flex justify-content-center">
        <div className="col-8">
          <div className="form-group">
            <label htmlFor="username">User name</label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter user name"
              onChange={this.changeValue}
              required
            />
            {this.state.errorUsernameDiscription && (
              <span className="text-danger">
                {this.state.errorUsernameDiscription}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={this.changeValue}
              required
            />
            {this.state.errorEmailDiscription && (
              <span className="text-danger">
                {this.state.errorEmailDiscription}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.changeValue}
              required
            />
          </div>
          <div className="d-flex flex-column">
            {this.state.errorPasswordDiscription && (
              <span className="text-danger">
                {this.state.errorPasswordDiscription}
              </span>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.submit}
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SignupPage;
