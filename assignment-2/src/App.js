import React, { Component } from 'react';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username : 'Bill'
  }

  changeUserNameHandler = (event) => {
    this.setState(
      {
        username : event.target.value
      }
    )
  }
  render() {
    return (
      <div className="App">
        <UserInput changed = {this.changeUserNameHandler} username = {this.state.username}/>
        <UserOutput username = {this.state.username}/>
        {/* <UserOutput />
        <UserOutput />
        <UserOutput />
        <UserOutput /> */}
      </div>
    );
  }
}

export default App;
