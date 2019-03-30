import React, { Component } from 'react';
import axios from 'axios';
import WordList from './components/WordList';
class App extends Component {
  constructor() {
    super();
    this.state = {
      wordList: []
    };
  }
  componentDidMount() {
    console.log('cdm running');
    axios.get('http://localhost:5000/api/').then(res => {
      console.log(res);
      this.setState({ wordList: res.data });
    });
  }
  q;
  render() {
    return (
      <div className="App">
        <h1>APP ONLINE</h1>
        <WordList wordList={this.state.wordList} />
      </div>
    );
  }
}

export default App;
