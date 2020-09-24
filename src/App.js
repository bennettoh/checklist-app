import React from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

import Entry from "./components/Entry";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    items: [
      {
        value: "🎉 Add, edit, delete, re-order items",
        key: 1239283798272,
      },
      {
        value: "🍎 Grocery shopping",
        key: 9851098237510,
      },
      {
        value: "📚 Organize library shelves",
        key: 3498378091480,
      },
    ],
    itemsComplete: [
      {
        value: "📐 Site visit & measure dimensions",
        key: 1258972389573,
      },
    ],
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

  swap = (indexA, indexB, complete) => {
    let array;
    if (complete === true) {
      array = this.state.itemsComplete;
    } else {
      array = this.state.items;
    }

    if (indexB === -1) return;
    if (indexB === array.length) return;
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;

    if (complete === true) {
      this.setState({
        itemsComplete: array,
      });
    } else {
      this.setState({
        items: array,
      });
    }
  };

  handleComplete = (index) => {
    let listIncomplete = this.state.items;
    let listComplete = this.state.itemsComplete;
    let itemComplete = listIncomplete.splice(index, 1);
    this.setState({
      items: listIncomplete,
      itemsComplete: listComplete.concat(itemComplete),
    });
  };

  handleIncomplete = (index) => {
    let listIncomplete = this.state.items;
    let listComplete = this.state.itemsComplete;
    let itemIncomplete = listComplete.splice(index, 1);
    this.setState({
      items: listIncomplete.concat(itemIncomplete),
      itemsComplete: listComplete,
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
              handleComplete={this.handleComplete}
              checked={false}
            />
          );
        })}
        <Typography align="center">Completed</Typography>
        {this.state.itemsComplete.map((item, i) => {
          return (
            <Entry
              key={item.key}
              value={item.value}
              index={i}
              delete={this.delete}
              editItem={this.editItem}
              onSwap={this.swap}
              handleComplete={this.handleIncomplete}
              checked={true}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
