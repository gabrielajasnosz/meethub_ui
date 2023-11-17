import React from "react";
import "./StartPage.scss";
import { SignInView } from "./SignInView/SignInView";
import { Divider } from "@mui/material";

export const StartPage = () => (
  <div className="start-page">
    <div className="start-page__content">
      <SignInView />
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ margin: "20px " }}
      />
      <div>DUPA DIPA DUPA</div>
    </div>
  </div>
);
