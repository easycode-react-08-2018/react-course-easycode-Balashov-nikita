import React from "react";

export default props => {
  const Users = props.users.map((user, i) => {
    const { _id, name, email } = user;

    return (
      <div key={i}>
        <div
          className="card text-white bg-secondary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">User info</div>
          <div className="card-body">
            <h5 className="card-title">Id:</h5>
            <p className="card-text">{_id}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">User name:</h5>
            <p className="card-text">{name}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Email:</h5>
            <p className="card-text">{email}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{Users}</div>
    </div>
  );
};
