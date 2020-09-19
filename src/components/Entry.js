import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./Entry.css";

class Entry extends React.Component {
  state = {
    editModeOn: false,
  };

  handleEditToggle = () => {
    this.setState({
      editModeOn: !this.state.editModeOn,
    });
    console.log(this.state.editModeOn);
  };

  render() {
    return (
      <div key={this.props.index} className="row">
        <Typography className="text" variant="body1">
          {this.props.value}
        </Typography>
        <Button
          // color="primary"
          variant="contained"
          type="button"
          onClick={() => this.handleEditToggle()}
        >
          {this.state.editModeOn ? "Done" : "Edit"}
        </Button>
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
