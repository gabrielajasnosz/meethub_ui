import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import Button from "@mui/material/Button";
import "./SignUpForm.scss";
import { ArrowBack } from "@mui/icons-material";
import { signUp, SignUpFormType } from "../../services/UserService";
import { Alert, Snackbar } from "@mui/material";

export const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormType>({});
  const [toastOpened, setToastOpened] = useState<boolean>(false);

  const handleSubmit = () => {
    signUp(formData).then(() => {
      setToastOpened(true);
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
        onClick={() => handleSubmit()}
        fullWidth
      >
        Sign up
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top",horizontal: "center" }}
        open={toastOpened}
        autoHideDuration={6000}
        onClose={() => {setToastOpened(false)}}
      >
        <Alert severity="success">Sign up completed! You can now sign in to your account. </Alert>
      </Snackbar>
    </form>
  );
};
