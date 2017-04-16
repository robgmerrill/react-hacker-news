import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// ReactDom.render() uses a DOM node in your HTML to replace it wit your JSX.
// ReactDom.render() expects two arguments: JSX that gets rendered, second argument
// specifies the place where the React application hooks into your HTML. It expects
// an an element with an id='root'
ReactDOM.render(
  // You instantiate your "App" component with <App />
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
