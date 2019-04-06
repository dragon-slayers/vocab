import React from 'react';

import Word from './Word.js';

const WordList = props => {
  return (
    <div>
      <h1>Word List Online</h1>
      {props.words.map(word => {
        return <Word key={word.name} word={word} />;
      })}
    </div>
  );
};

export default WordList;
