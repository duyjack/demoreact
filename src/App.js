import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TextParagraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'App.js'
    }
  }

  render() {
    return (
      <p>
        Edit <code>{this.state.text}</code> and save to reload.
      </p>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TextParagraph />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
};
