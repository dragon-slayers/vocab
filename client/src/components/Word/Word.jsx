import React from "react";
// import PropTypes from "prop-types";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import axios from "axios";
import WordCard from "./WordCard";
class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: null
    };
  }
  // componentDidMount() {
  //   // change this line to grab the id passed on the URL
  //   const { id } = this.props.match.params;
  //   this.fetchMovie(id);
  // }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/words/${id}`)
      .then(response => {
        this.setState(() => ({ word: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    if (!this.state.word) {
      return <div>Loading word information...</div>;
    }

    const {
      name,
      definition,
      example,
      description,
      relevantLinks
    } = this.state.word;
    return <WordCard word={this.state.word} />;
  }
}
// Word.propTypes = {};

export default Word;
