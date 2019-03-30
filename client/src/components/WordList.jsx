import React from 'react';
import Word from './Word';
class WordList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>WordList</h1>
        {this.props.wordList.map(word => (
          <Word key={word.id} word={word} />
        ))}
      </div>
    );
  }
}
export default WordList;
