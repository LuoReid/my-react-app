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
    this.state = {value:'13'}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value)
    this.setState({value:event.target.value.toUpperCase()})
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

class EssayForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {value:'Please write an essay about your favorite DOM element.'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({value:event.target.value})
  }
  handleSubmit(event) {
    alert('An essay was submitted: '+this.state.value)
    event.preventDefault()
  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">Name:<textarea value={this.state.value} onChange={this.handleChange} /></label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
class FlavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value:'coconut'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({value:event.target.value})
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: '+this.state.value)
    event.preventDefault()
  }
  render(){
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">Pick your favorite La Croix flavor:
          <select name="" id="" value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isGoing: true, numberOfGuests:2}
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox'?target.checkbox:target.value
    const name = target.name
    this.setState({[name]:value})
  }
  render() {
    return (
      <form action="">
        <label htmlFor="">
          Is going: <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/></label>
        <br/>
        <label htmlFor="">
          Number of guests: <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange}/></label>
      </form>
    )
  }
}
function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>水会烧开</p>
  }
  return <p>水不会烧开</p>
}
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {temperature:''}
  }
  handleChange(e) {
    this.setState({temperature:e.target.value})
  }
  render() {
    const temperature = this.state.temperature
    return (
      <fieldset>
        <legend>输入一个摄氏温度</legend>
        <input type="text" vlaue={temperature} onChange={this.handleChange}/>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    )
  }
}
const scaleNames = {c:'Celsius',f:'Fahrenheit'}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 /9
}
function toFahrenheit(celsius){
  return (celsius * 9 / 5) + 32
}
function tryConvert(temperature,convert){
  const input = parseFloat(temperature)
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) /1000
  return rounded.toString()
}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {temperature:''}
  }
  handleChange(e) {
    this.setState({temperature:e.target.value})
  }
  render() {
    const temperature = this.state.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    )
  }
}
class Calculator1 extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )
  }
}
ReactDOM.render(<Calculator />,document.querySelector('#foot'))