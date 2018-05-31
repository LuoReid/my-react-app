import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';

const element6 = <h1>Hello,world Foot</h1>
/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element,document.getElementById('foot'))
  registerServiceWorker();
};*/

/*function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}*/
/*function tick(){
  ReactDOM.render(
    <Clock />,document.querySelector('#foot')
  )
}

setInterval(tick,1000);*/

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date:new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick(){ this.setState({date:new Date()}) }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
function App1() {
  return (
    <div>
      <Clock/>
      <Clock/>
      <Clock/>
    </div>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({isToggleOn:!prevState.isToggleOn}));
  }
  render() {
    return (
      <button onClick={ this.handleClick}>{this.state.isToggleOn?'ON':'OFF' }</button>
    )
  }
}

class LoggingButton extends React.Component {
  handleClick = (e) => { console.log('this is ',this,e) }
  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>Click me</button>
    )
  }
}

class Popper extends React.Component {
  constructor() {
    super();
    this.state = {name:'Hello world!'};
  }
  preventPop(name,e){
    e.preventDefault();
    alert(name);
    console.log(e)
  }
  render(){
    return (
      <div>
        <p>Hello</p>
        <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
      </div>
    )
  }
}

function UserGreeting(props){
  return <h1>Welcome back!</h1>
}
function GuestGreeting(props){
  return <h1>Please sign up</h1>
}
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>
  }else{
    return <GuestGreeting/>
  }
}
function LoginButton(props){
  return (<button onClick={props.onClick}>Login</button>)
}
function LogoutButton(props){
  return(<button onClick={props.onClick}>Logout</button>)
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn:false};
  }
  handleLoginClick(){ this.setState({isLoggedIn:true}) }
  handleLogoutClick() { this.setState({ isLoggedIn: false}) }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if(isLoggedIn){
      button = <LogoutButton onClick={ this.handleLogoutClick } />
    }else{
      button = <LoginButton onClick={ this.handleLoginClick } />
    }
    return (
      <div>
        {/*<Greeting isLoggedIn={isLoggedIn} />{button}*/}
        {isLoggedIn ? (<LogoutButton onClick={this.handleLogoutClick}/>):(<LoginButton onClick={this.handleLoginClick}/>)}
        <div>This user is <b>{isLoggedIn ? 'currently':'not'}</b> logged in.</div>
      </div>
    )
  }
}
function Mailbox(props){
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  )
}
const messages = ['React','Re:React','Re:Re:React'];

function WarningBanner(props) {
  if(!props.warn){
    return null;
  }
  return (
    <div className="warning">Warning!</div>
  )
}
class Page extends React.Component {
  constructor(props){
    super(props);
    this.state = { showWarning:true }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick(){
    this.setState(prevState => ({ showWarning: !prevState.showWarning }));
  }
  render() {
    return (
      <div>
        <WarningBanner warn={ this.state.showWarning } />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide':'Show'}
        </button>
      </div>
    )
  }
}
const numbers = [1,2,3,4,5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled)
const listItems = numbers.map((num) => <li key={num}>{num}</li>);

function ListItem(props) { return <li>{props.value}</li> }
function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((num,index) => <ListItem key={num} value={num}/>)
  return (<ul>{listItems}</ul>)
}

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value:''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({vlaue:event.target.value})
  }
  handleSubmit(event) {
    alert('A name was submitted: '+this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">Name: <input type="text" value={this.state.value} onChange={this.handleChange}/></label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

ReactDOM.render(
  <NameForm />,document.querySelector('#foot')
)