import React from "react";
import Word from "../Word/Word";
const WordList = props => {
  return (
    <div>
      {props.data.map(word => (
        <Word key={props.data.name} word={word} />
      ))}
    </div>
  );
};

export default WordList;
