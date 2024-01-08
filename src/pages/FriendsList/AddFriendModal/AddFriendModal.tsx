import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./AddFriendModal.scss";
import {
  inviteFriend,
  InviteFriendRequest,
} from "../../../services/FriendInvitationService";
import { Toast, ToastValues } from "../../../components/Toast/Toast";

export type AddFriendModalProps = {
  isOpened: boolean;
  closeModal: () => void;
};

export const AddFriendModal = ({
  isOpened,
  closeModal,
}: AddFriendModalProps) => {
  const [friendsMail, setFriendsMail] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastValues>({
    toastOpened: false,
  });

  const handleSubmit = () => {
    inviteFriend({ invitedUserEmail: friendsMail } as InviteFriendRequest)
      .then((status) => {
        if (status === 404) {
          setToast({
            toastOpened: true,
            severity: "error",
            message: "User with entered email do not exist.",
          });
        } else {
          setToast({
            toastOpened: true,
            severity: "success",
            message: "Invitation sent.",
          });
        }
      })
      .catch(() => {
        setToast({
          toastOpened: true,
          severity: "error",
          message: "Error",
        });
      });
  };

  return (
    <Dialog open={isOpened} onClose={closeModal} maxWidth="sm" fullWidth>
      <IconButton
        edge="end"
        color="inherit"
        onClick={closeModal}
        aria-label="close"
        size="large"
        sx={{ position: "absolute", right: 20, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent className={"add-friend-modal"}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4A6072" }}>
          Add friend
        </Typography>
        <TextField
          label="E-mail"
          variant="outlined"
          required={true}
          fullWidth
          helperText={"Your friend's email"}
          onChange={(event) => {
            setFriendsMail(event.target.value);
          }}
          sx={{ margin: "20px 0" }}
        />
        <div className={"add-friend-modal__buttons"}>
          <Button onClick={closeModal} color="primary" fullWidth>
            Close
          </Button>
          <Button
            onClick={() => {
              handleSubmit();
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Add
          </Button>
        </div>
      </DialogContent>
      <Toast
        toastOpened={toast.toastOpened}
        setToastOpened={(value) => setToast({ ...toast, toastOpened: value })}
        severity={toast.severity}
        message={toast.message}
      />
    </Dialog>
  );
};
