import React from 'react';

const Word = props => {
  console.log(props.word.name);
  return (
    <div>
      <h3> {props.word.name}</h3>
      <ul>
        {/* <strong>Definition:</strong>
        <p>{props.definition}</p>
        <strong>Description:</strong>
        <p>{props.description}</p>
        <strong>Relevant Links:</strong>
        <p>{props.relevantLinks}</p> */}
      </ul>
    </div>
  );
};

export default Word;
