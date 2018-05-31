import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom'

function formatName(user){
  return user.firstName + ' '+ user.lastName;
}
const user = {
  firstName:'Harper',lastName:'Perez'
};
const element = (
  <h1>Hello,{formatName(user)}!</h1>
);
function GetGreeting(user){
  if(user){
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}
const element1 = <div tabIndex="0"></div>
const element2 = <img src={user.avatarUrl} alt="avatar"/>
const element3 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
)
const title = 'test;'//response.potentiallyMaliciousInput;
const element4 = <h1>{title}</h1>
const element5 = React.createElement('h1',{className:'greeting'},'Hello, world!')


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello, world!</h1>
        {element}
        {GetGreeting()}
        {element1}
        {element2}
        {element3}
        {element4}
        {element5}
        <GetGreeting user={{firstName:"Sara",lastName:"Chrow1"}} />
      </div>
    );

  }
}

export default App;
