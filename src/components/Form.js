import React from "react";

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
        <button type="submit">
          {this.props.defaultValue === "" ? "Add" : "Done"}
        </button>
      </form>
    );
  }
}

export default Form;
