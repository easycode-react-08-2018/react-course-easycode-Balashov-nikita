import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App container main-block d-flex justify-content-center align-items-center">
        <Link to="/auth">
          <button className="btn btn-outline-primary">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-outline-primary ml-2">Sign up</button>
        </Link>
      </div>
    );
  }
}

export default App;
