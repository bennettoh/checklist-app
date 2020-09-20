import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./Entry.css";

import Form from "./Form";

class Entry extends React.Component {
  state = {
    editModeOn: false,
  };

  handleEditToggle = () => {
    this.setState({
      editModeOn: !this.state.editModeOn,
    });
  };

  handleEdit = (value) => {
    this.handleEditToggle();
    this.props.editItem(value, this.props.index);
  };

  render() {
    return (
      <div key={this.props.index} className="row">
        {this.state.editModeOn ? (
          // Edit mode on
          <>
            <Form onSubmit={this.handleEdit} defaultValue={this.props.value} />
          </>
        ) : (
          // Edit mode off
          <>
            <Typography className="stretch" variant="body1">
              {this.props.value}
            </Typography>
            <Button
              variant="contained"
              type="button"
              onClick={() => this.handleEditToggle()}
            >
              Edit
            </Button>
          </>
        )}

        <Button
          color="secondary"
          variant="contained"
          type="button"
          onClick={() => this.props.delete(this.props.index)}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default Entry;
