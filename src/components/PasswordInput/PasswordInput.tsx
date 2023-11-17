import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import TextField from "@mui/material/TextField";

type PasswordInputProps = {
  onChange: (value: any) => void;
};

export const PasswordInput = ({ onChange }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextField
      label="Password"
      variant="outlined"
      required={true}
      onChange={onChange}
      fullWidth
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
  );
};
