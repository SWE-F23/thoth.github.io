import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

export function UserNameField() {
  return (
    <TextField
      className = "textinput"
      required
      label="User Name"
      placeholder="Enter your user name"
    />
  );
}

export function EmailAddressField() {
  return (
    <TextField
      className="textinput"
      required
      label="Email Address"
      placeholder="Enter your email address"
    />
  );
}

export function PasswordField(text: string) {
  return (
    <TextField
      className="textinput"
      required
      label={text}
      type="password"
      autoComplete="current-password"
    />
  );
}

export function SubmitButton(text: string, handleClick: () => void) {
  return (
    <Button variant="contained" className="textinput" onClick={handleClick}>
      {text}
    </Button>
  );
}
