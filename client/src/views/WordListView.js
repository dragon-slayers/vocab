import React from 'react';
import { connect } from 'react-redux';
import { WordList } from '../components/WordList';
import { fetchWords } from '../actions';

class WordListView extends React.Component {
  componentDidMount() {
    this.props.fetchWords();
  }
  render() {
    if (this.props.fetching) {
      return <h4>Loading ...</h4>;
    }
    return (
      <div>
        <WordList words={this.props.words} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    words: state.wordsReducer.words,
    error: state.wordsReducer.error,
    isLoading: state.wordsReducer.isLoading
  };
};
export default connect(
  mapStateToProps,
  {
    fetchWords
  }
)(WordListView);
