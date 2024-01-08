import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import Button from "@mui/material/Button";
import "./SignUpForm.scss";
import { ArrowBack } from "@mui/icons-material";
import { signUp, SignUpFormType } from "../../services/UserService";
import { Toast, ToastValues } from "../../components/Toast/Toast";

export const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormType>({});
  const [toast, setToast] = useState<ToastValues>({
    toastOpened: false,
  });

  const handleSubmit = () => {
    signUp(formData)
      .then((r) => {
        setToast({
          toastOpened: true,
          severity: "success",
          message: "Sign up completed! You can now sign in to your account.",
        });
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
    <form className={"sign-up-form"}>
      <Button
        variant="text"
        startIcon={<ArrowBack />}
        sx={{ color: "grey" }}
        href={"/"}
      >
        Go back
      </Button>
      <img className={"logo"} src="meethub_logo.png" alt="logo" />
      <TextField
        label="First name"
        variant="outlined"
        required={true}
        fullWidth
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }
      />
      <TextField
        label="Last name"
        variant="outlined"
        required={true}
        fullWidth
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      />
      <TextField
        label="E-mail"
        variant="outlined"
        required={true}
        fullWidth
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <TextField
        label="Phone number"
        variant="outlined"
        required={true}
        fullWidth
        onChange={(event) =>
          setFormData({ ...formData, mobileNumber: event.target.value })
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
        disabled={Object.keys(formData).length < 5}
        onClick={() => handleSubmit()}
        fullWidth
      >
        Sign up
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
