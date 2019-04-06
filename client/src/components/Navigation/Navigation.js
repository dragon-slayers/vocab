import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>Lambda Words</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/addWord">Add Word</Link>
          <Link to="/wordList">Word List</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
