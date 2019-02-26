import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
class Word extends React.Component {
  render() {
    return (
      <Card>
        <CardTitle> {this.props.word.name}</CardTitle>
        <CardText>
          <span>Definition: </span> {this.props.word.definition}
        </CardText>
        <CardText>
          <span>Example: </span>
          {this.props.word.example}
        </CardText>
        <CardText>
          <span>Description: </span>
          {this.props.word.description}
        </CardText>
        <CardText>
          <span>Relevant Links: </span>
          <a href="{this.props.word.relevantLinks}">
            {this.props.word.relevantLinks}
          </a>
        </CardText>
      </Card>
    );
  }
}
// Word.propTypes = {};

export default Word;
