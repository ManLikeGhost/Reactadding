import React, {Component }from 'react';
import './App.css';
import Sales from './Sales';

class App extends Component {
  render() {
    var list = [
      {name: 'Ruby', price: 200},
      {name: 'Python', price: 100},
      {name: 'Java', price: 150},
      {name: 'Kotlin', price: 250},
    ]
    return (
      <div className="App">
        <Sales items={list}/>
      </div>
    )
  }
}

export default App
