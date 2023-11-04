"use client";
import React from "react";
import { UserNameField, EmailAddressField, PasswordField, SubmitButton } from "./common";

export function SignUp() {
  return [
    <h1>Sign Up!</h1>,
    UserNameField(),
    EmailAddressField(),
    PasswordField("Password"),
    PasswordField("Confirm Password"),
    SubmitButton("Sign up", () => {}),
  ];
}

export function SignIn() {
  return [
    <h1>Sign In!</h1>,
    EmailAddressField(),
    PasswordField("Password"),
    SubmitButton("Log in", () => {}),
  ];
}
