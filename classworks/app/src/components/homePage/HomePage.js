import React, { Component, Fragment } from "react";
import UserCard from "./UserCard";
import SignOut from "./SignOut";
import { getUsersRequest } from "../../api/api";
import Loader from "./Loader";
import AnotherUsers from "./AnotherUsers";

export class HomePage extends Component {
  state = {
    AnotherUsers: null
  };

  componentWillMount() {
    const TOKEN = localStorage.getItem("token");
    getUsersRequest(TOKEN)
      .then(req => {
        const arrWithUsers = Object.values(req.data.message);

        this.setState({
          AnotherUsers: arrWithUsers
        });
      })
      .catch(res => {
        console.log(res.response);
      });
  }

  render() {
    console.log(this.props);

    const { state } = this.props.location;

    return (
      <Fragment>
        <div className="text-center text-info">
          <h2>Home Page</h2>
        </div>

        <hr />

        <div className="d-flex justify-content-center align-items-center flex-column">
          <UserCard state={state} />
          <SignOut />
        </div>

        <hr />

        {this.state.AnotherUsers ? (
          <AnotherUsers users={this.state.AnotherUsers} />
        ) : (
          <Loader />
        )}
      </Fragment>
    );
  }
}

export default HomePage;
