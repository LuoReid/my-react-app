import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import demo from './demo';
import Welcome from './Welcome';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
