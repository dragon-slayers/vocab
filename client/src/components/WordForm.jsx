import React from 'react';
const WordForm = () => {
  return (
    <div>
      <h1>Add a word here. </h1>
      <form>
        <input type="text" placeholder="Word" />
        <input type="text" placeholder="Definition" />
        <input type="text" placeholder="Example" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Relevant Links" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default WordForm;
