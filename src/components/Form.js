import React from "react";
import { Check, Add } from "@material-ui/icons";
import { IconButton, TextField } from "@material-ui/core";

import "./Form.css";

class Form extends React.Component {
  state = {
    value: this.props.defaultValue,
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.value === "") {
      alert("Input is blank");
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="flex center">
        <TextField
          type="text"
          placeholder="Write a description"
          value={this.state.value}
          onChange={this.handleChange}
          className="stretch"
        />
        {this.props.defaultValue === "" ? (
          <IconButton type="submit">
            <Add color="action" />
          </IconButton>
        ) : (
          <IconButton type="submit">
            <Check color="action" />
          </IconButton>
        )}
      </form>
    );
  }
}

export default Form;
