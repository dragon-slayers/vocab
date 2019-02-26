import React from "react";
import PropTypes from "prop-types";

class Word extends React.Component {
  render() {
    return (
      <div>
        <h3> {this.props.word.name}</h3>
        {this.props.word.definition}
        {this.props.word.example}
        {this.props.word.description}
        {this.props.word.relevantLinks}
      </div>
    );
  }
}
// Word.propTypes = {};

export default Word;
