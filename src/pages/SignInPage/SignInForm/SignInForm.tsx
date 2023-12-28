import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./SignInForm.scss";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { signIn, SignInFormType } from "../../../services/UserService";
import { Toast, ToastValues } from "../../../components/Toast/Toast";
import { useStorage } from "../../../hooks/useStorage";

export const SignInForm = () => {
  const { signIn: logIn } = useStorage();
  const [formData, setFormData] = useState<SignInFormType>({});
  const [toast, setToast] = useState<ToastValues>({
    toastOpened: false,
  });

  const handleSubmit = () => {
    signIn(formData)
      .then((data) => {
        logIn(data);
      })
      .catch((e) => {
        setToast({
          toastOpened: true,
          severity: "error",
          message: "There has been an error. Please check the form.",
        });
      });
  };
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
        onClick={() => handleSubmit()}
      >
        Sign in
      </Button>
      <Toast
        toastOpened={toast.toastOpened}
        setToastOpened={(value) => setToast({ ...toast, toastOpened: value })}
        severity={toast.severity}
        message={toast.message}
      />
    </form>
  );
};
