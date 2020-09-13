import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { useAlert } from "react-alert";

const Notify = () => {
  const alert = useAlert();

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => {
        alert.show(
          "In order to use this application. You need to add and enable CORS extension!"
        );
      }}
    >
      Click Here !
    </Button>
  );
};

export default Notify;
