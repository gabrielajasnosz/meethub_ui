import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./SignInView.scss";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const SignInView = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className={"sign-in-view"} onSubmit={() => {}}>
      <img className={"logo"} src="meethub_logo.png" alt="Italian Trulli" />
      <TextField label="e-mail" variant="outlined" required={true} />
      <TextField
        label="password"
        variant="outlined"
        required={true}
        InputProps={{
          type: showPassword ? "text" : "password",
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" sx={{ height: "50px" }} type="submit">
        Sign in
      </Button>
    </form>
  );
};
