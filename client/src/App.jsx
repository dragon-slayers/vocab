import React, { Component } from 'react';
import './App.css';
import WordList from './components/WordList/WordList';
import { Route } from 'react-router';
import Word from './components/Word/Word';
class App extends Component {
  constructor() {
    super();
    this.state = {
      savedWords: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Vocabulary App</h1>
        {/* <WordList word={this.state.words} /> */}
        <Route path="/" exact component={WordList} />
        <Route path="/words/:id" component={Word} />
      </div>
    );
  }
}

export default App;
