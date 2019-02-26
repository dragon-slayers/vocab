import React, { Component } from "react";
import "./App.css";
import WordList from "./components/WordList/WordList";
import data from "./vocab";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Vocabulary App</h1>
        <WordList data={this.state.data} />
      </div>
    );
  }
}

export default App;
