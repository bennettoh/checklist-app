import React from "react";
import "./App.css";

import Entry from "./components/Entry";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    items: [{ value: "example Text", key: new Date().getTime().toString() }],
  };

  addItem = (value) => {
    if (value === "") {
      alert("Input is blank");
    } else {
      let itemObj = { value: value, key: new Date().getTime().toString() };
      this.setState({
        items: this.state.items.concat(itemObj),
      });
    }
  };

  delete = (index) => {
    this.setState({
      items: this.state.items.filter((item, location) => {
        return location !== index;
      }),
    });
  };

  editItem = (value = "test value", index = 0) => {
    let editedList = this.state.items;
    let editedItem = {
      value: value,
      key: editedList[index].key,
    };
    editedList[index] = editedItem;

    this.setState({
      items: editedList,
    });
  };

  render() {
    return (
      <div className="App">
        <label>Enter item text: </label>
        <Form onSubmit={this.addItem} defaultValue="" />
        {this.state.items.map((item, i) => {
          return (
            <Entry
              key={item.key}
              value={item.value}
              index={i}
              delete={this.delete}
              editItem={this.editItem}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
