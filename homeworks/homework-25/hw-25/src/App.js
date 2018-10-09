import React, { Component } from 'react';
import {users} from './users';
import UserPanelList from './UserPanelList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">  

          <UserPanelList className="user-panel-list" users={users}></UserPanelList>

      </div>
    );
  }
}

export default App;
