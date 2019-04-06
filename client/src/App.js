import Navigation from './components/Navigation/Navigation.js';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import WordForm from './components/WordForm.js';
import { connect } from 'react-redux';
import { addWords } from './actions/';
import WordList from './components/WordList/WordList.js';
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {/* <WordForm /> */}
        <WordList />
        <Route
          exact
          path="/wordList"
          Component={WordList}
          submit={this.props.addWords}
        />
        <Route
          exact
          path="/addWord"
          Component={WordForm}
          submit={this.props.addWords}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addWords }
)(App);
