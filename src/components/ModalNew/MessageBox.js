import React from "react";
import { Button } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const MessageBox = ({ title, description, setOpen, open, onConfirm, Id }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onConfirm(Id);
            setOpen(false);
          }}
          color="secondary"
        >
          Yes
        </Button>
        <Button onClick={() => setOpen(false)} color="primary" autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessageBox;
