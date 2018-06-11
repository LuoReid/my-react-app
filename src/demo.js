import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PropTypes from 'prop-types';
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
  return <h1>Welcome back,{props.name}!</h1>
}
function GuestGreeting(props){
  return <h1>Please sign up,{props.name}:)</h1>
}
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting name={props.name}/>
  }else{
    return <GuestGreeting name={props.name}/>
  }
}
//Greeting.propTypes = {isLoggedIn:PropTypes.bool}
Greeting.defaultProps = {
  name : 'Stranger'
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
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = {temperature:'',scale:'c'}
  }
  handleCelsiusChange(temperature) {
    this.setState({scale:'c',temperature})
  }
  handleFahrenheitChange(temperature) {
    this.setState({scale:'f',temperature})
  }
  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature,toCelsius):temperature
    const fahrenheit = scale === 'c'? tryConvert(temperature,toFahrenheit):temperature
    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
        {/*<fieldset>
          <legend>输入一个摄氏温度</legend>
          <input type="text" vlaue={temperature} onChange={this.handleChange}/>
          <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>*/}
      </div>
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
  }
  handleChange(e) {
    //this.setState({temperature:e.target.value})
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    //const temperature = this.state.temperature
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={temperature} onChange={this.handleChange} />
        {/*<BoilingVerdict celsius={parseFloat(temperature)} />*/}
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
function FancyBorder(props){
  return (
    <div className={'FancyBorder FancyBorder-'+props.color}>{props.children}</div>
  )
}
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}
function WelcomeDialog(){
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  )
}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  )
}
class SignUpDialog extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = {login:''}
  }
  handleChange(e) {
    this.setState({login: e.target.value})
  }
  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`)
  }
  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <input type="text" value={this.state.login} onChange={this.handleChange}/>
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    )
  }
}
/*function App(){
  return (
    <SplitPane left={<Contacts />} right={<Chat />} />
  )
}*/

class ProductCategoryRow extends React.Component {
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>)
  }
}
class ProductRow extends React.Component {
  render() {
    let name = this.props.product.stocked ?
    this.props.product.name:
    <span style={{color:'red'}}>{this.props.product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}
class ProductTable extends React.Component {
  render() {
    let rows = [];
    let lastCategory = null;
    console.log(this.props.inStockOnly)
    this.props.products.forEach(product => {
      if(product.name.indexOf(this.props.filterText) === -1
        || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if(product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category}
          key={product.category} />)
      }
      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this)
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this)
  }
  handleFilterTextInputChange(e) { this.props.onFilterTextInput(e.target.value) }
  handleInStockInputChange(e) { this.props.onInStockInput(e.target.checked) }
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Search..."
        value={this.props.filterText}
        onChange={this.handleFilterTextInputChange} />
        <p>
          <input type="checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleInStockInputChange}/>{' '} Only show products in stock
        </p>
      </form>
    )
  }
}
class FilterableProductTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {filterText:'',inStockOnly:false}
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
    this.handleInStockInput = this.handleInStockInput.bind(this)
  }
  handleFilterTextInput(filterText) { this.setState({filterText:filterText}) }
  handleInStockInput(inStockOnly) { this.setState({inStockOnly:inStockOnly}) }
  render() {
    return (
      <div style={{border:'solid 1px red'}}>
        <SearchBar filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput} />
        <ProductTable products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />
      </div>
    )
  }
}
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput(){
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="Focus" onClick={this.focusTextInput} the="" text="" input=""/>
      </div>
    )
  }
}
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focusTextInput();
  }
  render() {
    return (<CustomTextInput ref={this.textInput} />)
  }
}
ReactDOM.render(
  <AutoFocusTextInput isLoggedIn={true} products={PRODUCTS} />
  ,document.querySelector('#foot')
  )