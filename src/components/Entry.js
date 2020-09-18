import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./Entry.css";

class Entry extends React.Component {
  state = {
    editModeOn: false,
  };

  render() {
    return this.props.items.map((value, index) => {
      return (
        <div key={index} className="row">
          <Typography className="text" variant="body1">
            {value}
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            type="button"
            onClick={() => this.props.delete(index)}
          >
            Delete
          </Button>
        </div>
      );
    });
  }
}

export default Entry;
