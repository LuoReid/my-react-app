
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';

/*class Welcome extends React.Component{
  render() {
    return <h1>Hello,{this.props.name}</h1>
  }
}*/
function Welcome(props){
  return <h1>Hello,{props.name}</h1>
}
function App() {
  return (
    <div>
      <Welcome name="Sara"></Welcome>
      <Welcome name="Cahal"></Welcome>
      <Welcome name="Edite"></Welcome>
    </div>
  )
}


const element = <Welcome name="Sara Chrow" />
ReactDOM.render(<App/>,document.querySelector('#head'))
  registerServiceWorker();