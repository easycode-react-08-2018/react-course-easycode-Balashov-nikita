import React, { Component } from "react";
import * as api from "../../api/api";
import history from "../../history/history";

const { loginRequest } = api;

export class AuthPage extends Component {
  state = {
    username: "",
    password: "",
    errorPasswordDiscription: null,
    errorUsernameDiscription: null
  };

  changeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    const userData = {
      user: username,
      password
    };

    loginRequest(userData)
      .then(req => {
        console.log(req.data);
        const { token, user } = req.data.message;
        localStorage.setItem("token", `${token}`);
        this.setState({
          errorPasswordDiscription: null,
          errorUsernameDiscription: null
        });
        history.push("/home", user);
      })
      .catch(res => {
        this.setState({
          errorPasswordDiscription: null,
          errorUsernameDiscription: null
        });

        const { message } = res.response.data;

        if (message.includes("password")) {
          this.setState({
            errorPasswordDiscription: message
          });
        }

        if (message.includes("User")) {
          this.setState({
            errorUsernameDiscription: message
          });
        }
      });
  };

  render() {
    const { username, password } = this.state;

    return (
      <form className="container d-flex justify-content-center">
        <div className="col-8">
          <div className="form-group">
            <label htmlFor="username">User name</label>
            <input
              name="username"
              value={username}
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter user name"
              onChange={this.changeValue}
            />
            {this.state.errorUsernameDiscription && (
              <span className="text-danger">
                {this.state.errorUsernameDiscription}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={password}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.changeValue}
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
              Log in
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AuthPage;
