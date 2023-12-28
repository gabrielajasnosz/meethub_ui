import { Alert, AlertColor, Snackbar } from "@mui/material";
import React from "react";

export type ToastValues = {
  toastOpened: boolean;
  severity?: AlertColor;
  message?: String;
};

export type ToastProps = ToastValues & {
  setToastOpened: (arg0: boolean) => void;
};

export const Toast = ({
  toastOpened,
  setToastOpened,
  severity,
  message,
}: ToastProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={toastOpened}
      autoHideDuration={6000}
      onClose={() => {
        setToastOpened(false);
      }}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};
