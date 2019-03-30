import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
const WordCard = props => {
  const { name, definition, example, description, relevantLinks } = props.word;
  return (
    <div className="movie-card">
      <Card>
        <CardTitle> {name}</CardTitle>
        <CardSubtitle>
          <span>Definition: </span> {definition}
        </CardSubtitle>
        <CardBody>
          <CardText>
            <span>Example: </span>
            {example}
          </CardText>
          <CardText>
            <span>Description: </span>
            {description}
          </CardText>
        </CardBody>
        <CardSubtitle>
          <span>Relevant Links: </span>
          <a href="{this.props.word.relevantLinks}">{relevantLinks}</a>
        </CardSubtitle>
      </Card>
    </div>
  );
};

export default WordCard;
