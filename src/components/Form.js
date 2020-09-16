import React from "react";

class Form extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Item: </label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
