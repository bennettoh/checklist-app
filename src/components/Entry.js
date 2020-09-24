import React from "react";
import { IconButton, Typography, Checkbox } from "@material-ui/core";
import { ArrowDropDown, ArrowDropUp, Edit, Delete } from "@material-ui/icons";

import "./Entry.css";

import Form from "./Form";

class Entry extends React.Component {
  state = {
    editModeOn: false,
    checked: false,
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
    let cla = this.props.checked ? "card complete" : "card";

    return (
      <div key={this.props.index} className={cla}>
        <section className="arrows">
          <IconButton
            onClick={() =>
              this.props.onSwap(
                this.props.index,
                this.props.index - 1,
                this.props.checked
              )
            }
          >
            <ArrowDropUp color="action" />
          </IconButton>
          <IconButton
            onClick={() =>
              this.props.onSwap(
                this.props.index,
                this.props.index + 1,
                this.props.checked
              )
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
          <div className="flex">
            <div className="flex">
              <div className="column">
                <Checkbox
                  checked={this.props.checked}
                  color="default"
                  onClick={() => this.props.handleComplete(this.props.index)}
                />
                <Typography
                  className="item-text"
                  display="inline"
                  variant="body1"
                >
                  {this.props.value}
                </Typography>
              </div>
            </div>
            <div className="column">
              <IconButton onClick={() => this.handleEditToggle()}>
                <Edit color="action" />
              </IconButton>
            </div>
          </div>
        )}

        <div className="column">
          <IconButton onClick={() => this.props.delete(this.props.index)}>
            <Delete color="action" />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Entry;
