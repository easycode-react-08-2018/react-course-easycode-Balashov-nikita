import React, { Component } from 'react';
import MainPage from './components/MainPage';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import ShoppingPage from './components/ShoppingPage';
import './App.css';

class App extends Component {
  state = {
    activePage: "mainPage",
    stuff: [
      "Macbook Pro 2018",
      "Dell xs",
      "Microsoft Surface"
    ],
    stuffInCart: [
      "Macbook Pro 2018"
    ]
  }

  switchToAdminPage = () => {
    this.setState({"activePage": "adminPage"})
  }

  switchToUserPage = () => {
    this.setState({"activePage": "userPage"})
  }

  switchToMainPage = () => {
    this.setState({"activePage": "mainPage"})
  }

  switchToCartPage = () => {
    this.setState({"activePage": "shoppingPage"})
  }

  addStuffInAdminPage = (stuffToAdd) => {
    if(stuffToAdd) {
      this.state.stuff.push(stuffToAdd)
      this.setState(this.state);
    }
  }

  addStuffInUserPage = (stuffToAdd) => {
    if(stuffToAdd) {
      this.state.stuffInCart.push(stuffToAdd)
      this.setState(this.state);
    }
  }

  pages = {
    "mainPage": 
    <MainPage 
      switchToAdminPage={this.switchToAdminPage} 
      switchToUserPage={this.switchToUserPage} 
    />,
    "adminPage": 
    <AdminPage 
      switchToMainPage={this.switchToMainPage}
      addStuffInAdminPage={this.addStuffInAdminPage}
      stuff={this.state}
    />,
    "userPage": <UserPage 
      switchToMainPage={this.switchToMainPage}
      switchToCartPage={this.switchToCartPage}
      addStuffInUserPage={this.addStuffInUserPage}
      stuff={this.state}
    />,
    "shoppingPage": <ShoppingPage 
      switchToMainPage={this.switchToMainPage}
      stuff={this.state}
    />,
  }

  render() {
    const {activePage} = this.state;

    const PAGE_TO_RENDER = this.pages[activePage];

    return (
      <React.Fragment>
        {PAGE_TO_RENDER}
      </React.Fragment>
    );
  }
}

export default App;
