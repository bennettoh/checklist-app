import React from "react";
import "./App.css";

import Entry from "./components/Entry";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    items: [1, 2, 3, 4, 5],
  };

  addItem = (value) => {
    this.editItem();
    if (value !== "") {
      this.setState({
        items: this.state.items.concat(value),
      });
    } else {
      alert("Input is blank");
    }
  };

  delete = (index) => {
    this.setState({
      items: this.state.items.filter((item, location) => {
        return location !== index;
      }),
    });
  };

  editItem = (index = 0, value = "test value") => {
    let items = this.state.items;
    items[index] = value;
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addItem} />
        <Entry items={this.state.items} delete={this.delete} />
      </div>
    );
  }
}

export default App;
