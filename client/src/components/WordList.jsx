import React, { useState, useEffect } from 'react';
import Word from './Word';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import WordForm from './WordForm';

const WordList = () => {
  const [words, setWords] = useState([]);

  useEffect(e => {
    axios.get('http://localhost:5000/api/').then(res => {
      console.log(res);
      setWords(res.data);
    });
  });
  return (
    <>
      <h1>WordList</h1>
      {words.map(word => (
        <Link to="/:id">
          <Word key={word.id} word={word} />
        </Link>
      ))}
    </>
  );
};

export default WordList;
