import React from 'react';

class Word extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        {this.props.word.name}
        <ul>
          <li>{this.props.word.definition}</li>
          <li>{this.props.word.description}</li>
        </ul>
      </div>
    );
  }
}
export default Word;
