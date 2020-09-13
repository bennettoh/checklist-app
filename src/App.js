import React from "react";
import "./App.css";

import Table from "./components/Table";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    const charactersNew = characters.filter((character, i) => {
      return i !== index;
    });
    this.setState({ characters: charactersNew });
  };

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    });
  };

  render() {
    return (
      <div className="container">
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
