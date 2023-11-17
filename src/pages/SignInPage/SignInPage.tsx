import React from "react";
import { SignInForm } from "./SignInForm/SignInForm";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import "./SignInPage.scss";

export const SignInPage = () => (
  <>
    <SignInForm />
    <Divider
      orientation="vertical"
      variant="middle"
      flexItem
      sx={{ margin: "20px " }}
    />
    <div className="sign-up-info">
      Don't have an account yet?
      <Button href={"/sign-up"}> Sign Up </Button>
    </div>
  </>
);
