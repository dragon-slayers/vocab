import React, { Component } from 'react';
import axios from 'axios';
import WordList from './components/WordList';
import { Route } from 'react-router-dom';
import Word from './components/Word';
import Navigation from './components/Navigation/Navigation';
import WordForm from './components/WordForm';
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

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/addWord" render={props => <WordForm {...props} />} />
        <Route
          exact
          path="/"
          render={props => (
            <WordList {...props} wordList={this.state.wordList} />
          )}
        />
        <Route path="/:id" render={props => <Word {...props} />} />
      </div>
    );
  }
}

export default App;
