import React from 'react';

const Word = props => {
  return (
    <div>
      {props.word.name}
      <ul>
        <li>{props.word.definition}</li>
        <li>{props.word.description}</li>
      </ul>
    </div>
  );
};

export default Word;
