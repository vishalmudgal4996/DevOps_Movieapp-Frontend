import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Alert extends Component {
  constructor() {
    super();
    this.state = {};
  }

  showInfoButtonHandler = () => {
    alert("this is button");
  };

  render() {
    return (
      <div id="btn-alert-div">
        <Button
          variant="contained"
          color="secondary"
          onClick={this.showInfoButtonHandler}
        >
          Click Here
        </Button>
      </div>
    );
  }
}

export default Alert;
