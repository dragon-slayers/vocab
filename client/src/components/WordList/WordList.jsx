import React from "react";
import Word from "../Word/Word";
import { Link } from "react-router-dom";
// import data from "../../vocab";
import axios from "axios";
import WordCard from "../Word/WordCard";
class WordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/data")
      .then(response => {
        this.setState(() => ({ words: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  render() {
    return (
      <div>
        {this.state.words.map(word => (
          <Link to={`/words/${word.id}`}>
            <Word key={word.id} word={word} />
            <WordDetails key={word.id} word={word} />
          </Link>
        ))}
      </div>
    );
  }
}
function WordDetails({ word }) {
  const { name, relaventLinks, description, example } = word;
  return (
    <Link to={`/words/${word.id}`}>
      <WordCard word={word} />
    </Link>
  );
}

export default WordList;
