import React from "react";
import "./App.css";

import Entry from "./components/Entry";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = (value) => {
    let itemObj = { value: value, key: new Date().getTime().toString() };
    this.setState({
      items: this.state.items.concat(itemObj),
    });
  };

  delete = (index) => {
    this.setState({
      items: this.state.items.filter((item, location) => {
        return location !== index;
      }),
    });
  };

  editItem = (value, index) => {
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

  swap = (indexA, indexB) => {
    let array = this.state.items;
    if (indexB === -1) return;
    if (indexB === array.length) return;
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
    this.setState({
      items: array,
    });
  };

  render() {
    return (
      <div className="App">
        <section className="card">
          <Form onSubmit={this.addItem} className="stretch" defaultValue="" />
        </section>
        {this.state.items.map((item, i) => {
          return (
            <Entry
              key={item.key}
              value={item.value}
              index={i}
              delete={this.delete}
              editItem={this.editItem}
              onSwap={this.swap}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
