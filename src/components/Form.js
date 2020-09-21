import React from "react";
import { Check } from "@material-ui/icons";
import { IconButton, Button } from "@material-ui/core";

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
      <form onSubmit={this.handleSubmit} className="row">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="stretch"
        />
        {this.props.defaultValue === "" ? (
          <Button type="submit">Add</Button>
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
