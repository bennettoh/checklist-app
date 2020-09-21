import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { ArrowDropDown, ArrowDropUp, Edit, Delete } from "@material-ui/icons";

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
        <section className="arrows">
          <IconButton
            onClick={() =>
              this.props.onSwap(this.props.index, this.props.index - 1)
            }
          >
            <ArrowDropUp color="action" />
          </IconButton>
          <IconButton
            onClick={() =>
              this.props.onSwap(this.props.index, this.props.index + 1)
            }
          >
            <ArrowDropDown color="action" />
          </IconButton>
        </section>
        {this.state.editModeOn ? (
          // Edit mode on
          <>
            <Form onSubmit={this.handleEdit} defaultValue={this.props.value} />
          </>
        ) : (
          // Edit mode off
          <>
            <Typography className="item-text" display="inline" variant="body1">
              {this.props.value}
            </Typography>
            <Edit color="action" onClick={() => this.handleEditToggle()} />
          </>
        )}

        <Delete
          color="action"
          onClick={() => this.props.delete(this.props.index)}
        />
      </div>
    );
  }
}

export default Entry;
