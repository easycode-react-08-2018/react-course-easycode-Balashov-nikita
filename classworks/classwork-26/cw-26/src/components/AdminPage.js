import React, {Component} from 'react';
import SignOut from './shared/SignOut';
import AdminOrderItems from './shared/AdminOrderItems';

class AdminPage extends Component{
  state = {
    inputValue: "",
    stuff: this.props.stuff.stuff
  }

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  addNewStuff = () => {
    this.props.addStuffInAdminPage(this.state.inputValue);
    this.setState({
      inputValue: ""
    })

    const newStuff = [...this.state.stuff, this.state.inputValue]
    this.setState({
      stuff: newStuff
    })
  }

  render() {
    return (
        <div className="container flex-grow-1">
        <div className="row">
          <div className="col-8">
            <div className="admin-orders">
              <h1>ADMIN PAGE</h1>
              <ul id="admin-list" className="list-group">
                <AdminOrderItems stuff={this.state.stuff} />
              </ul>
              <br/>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text"
                  className="form-control"
                  placeholder="enter new name"
                  value={this.state.inputValue}
                  onChange={this.inputChange}/>
                <button className="btn btn-primary" onClick={this.addNewStuff}>Add</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div>
              Admin
            </div>
            <SignOut switchToMainPage={this.props.switchToMainPage}/>
          </div>
        </div>
      </div>  
    )
  }
}

export default AdminPage;