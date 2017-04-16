import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
},
];

// ES6 class component with the name App - A component declaraction
// When compnent is declared you can use it as an element everywhere in your application
// It will produce and instance of your component or in other words: the component gets
// instantiated.
class App extends Component {
  // element component returns is specified with render() method.
  render() {
    return (
      <div className="App">
        { list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>Author: {item.author} </span>
            <span>Comments: {item.num_comments} </span>
            <span>Points: {item.points} </span>
          </div>
        )}
      </div>
    );
  }
}



export default App;
