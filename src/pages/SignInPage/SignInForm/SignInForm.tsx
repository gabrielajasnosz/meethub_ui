import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./SignInForm.scss";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { signIn, SignInFormType } from "../../../services/UserService";

export const SignInForm = () => {
  const [formData, setFormData] = useState<SignInFormType>({});

  return (
    <form className={"sign-in-view"}>
      <img className={"logo"} src="meethub_logo.png" alt="logo" />
      <TextField
        label="E-mail"
        variant="outlined"
        required={true}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <PasswordInput
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <Button
        variant="contained"
        sx={{ height: "50px" }}
        onClick={() => signIn(formData)}
      >
        Sign in
      </Button>
    </form>
  );
};
