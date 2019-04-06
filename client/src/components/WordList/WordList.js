import React from 'react';
// import { Link } from 'react-router-dom';
import Word from './Word.js';
import { getWords } from '../../actions';
import { connect } from 'react-redux';
class WordList extends React.Component {
  componentDidMount() {
    this.props.getWords();
  }
  render() {
    if (this.props.fetchingWords) {
      return (
        <div>
          <h1>Looking....</h1>
        </div>
      );
    }
    return (
      <div>
        {this.props.words.map(word => {
          return <Word key={word.name} word={word} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    words: state.words,
    fetchingWords: state.fetchingWords
  };
};

export default connect(
  mapStateToProps,
  { getWords }
)(WordList);
