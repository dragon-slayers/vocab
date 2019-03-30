import React from 'react';
import Word from './Word';
import { Link } from 'react-router-dom';
import WordForm from './WordForm';

class WordList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>WordList</h1>
        {this.props.wordList.map(word => (
          <Link to="/:id">
            <Word key={word.id} word={word} />
          </Link>
        ))}
      </div>
    );
  }
}
export default WordList;
