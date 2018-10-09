import React from "react";
import { Link } from "react-router-dom";

export default () => {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <Link to="/">
      <button className="btn btn-outline-primary" onClick={clearLocalStorage}>
        Sign Out
      </button>
    </Link>
  );
};
