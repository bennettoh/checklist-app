import React from "react";
import "./App.css";

import Entry from "./components/Entry";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    items: [1, 2, 3, 4, 5],
  };

  addItem = (value) => {
    this.setState({
      items: this.state.items.concat(value),
    });
  };

  delete = (index) => {
    console.log(index);

    this.setState({
      items: this.state.items.filter((item, location) => {
        return location !== index;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Entry items={this.state.items} delete={this.delete} />
        <Form onSubmit={this.addItem} />
      </div>
    );
  }
}

export default App;
