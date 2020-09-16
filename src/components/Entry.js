import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./Entry.css";

class Entry extends React.Component {
  render() {
    return this.props.items.map((value, index) => {
      return (
        <div className="row">
          <Typography className="text" variant="body1">
            {value}
          </Typography>
          <Button type="button" onClick={this.props.delete(index)}>
            Delete
          </Button>
        </div>
      );
    });
  }
}

export default Entry;
