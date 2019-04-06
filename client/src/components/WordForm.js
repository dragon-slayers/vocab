import React from 'react';

class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      definition: '',
      example: '',
      description: '',
      relevantLinks: ''
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const word = {
      id: this.state.id,
      name: this.state.name,
      definition: this.state.definition,
      example: this.state.example,
      description: this.state.description,
      relevantLinks: this.state.relevantLinks
    };
    this.props.submit(word);
    this.setState({
      id: null,
      name: '',
      definition: '',
      example: '',
      description: '',
      relevantLinks: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChanges}
            placeholder="Word"
          />
          <input
            name="definition"
            type="text"
            value={this.state.definition}
            onChange={this.handleChanges}
            placeholder="Definition"
          />
          <input
            name="example"
            type="text"
            value={this.state.example}
            onChange={this.handleChanges}
            placeholder="Example"
          />
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChanges}
            placeholder="Description"
          />
          <input
            name="relevantLinks"
            type="text"
            value={this.state.relevantLinks}
            onChange={this.handleChanges}
            placeholder="Relevant Links"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default WordForm;
