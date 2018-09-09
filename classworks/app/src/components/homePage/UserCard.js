import React from "react";

const UserCard = props => {
  const { _id, name, email } = props.state;

  return (
    <div>
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
};

export default UserCard;
