import React from 'react';

export default function UserPanel(props) {
    return (
        <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{props.user.fullName}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div>
              <div className="col-md-3 col-lg-3 " align="center">
                <img src={props.user.avatarUrl} className="pull-left"/>
              </div>
              <div className=" col-md-9 col-lg-9">
                <table className="table table-user-information">
                  <tbody>
                    <tr>
                      <td>Дата рождения</td>
                      <td>{props.user.birthdate}</td>
                    </tr>
                    <tr>
                      <td>Пол</td>
                      <td>{props.user.gender}</td>
                    </tr>
                    <tr>
                      <td>Адрес</td>
                      <td>{props.user.address}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><a href="#">{props.user.email}</a></td>
                    </tr>  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}