import React from 'react';
import { Button, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type AddReceiptModalProps = {
  isOpened: boolean,
  closeModal: () => void
}


export const AddReceiptModal = ({ isOpened, closeModal} : AddReceiptModalProps) => {

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
          Add receipt
        </Typography>
        <div className={"add-friend-modal__buttons"}>
          <Button onClick={closeModal} color="primary" fullWidth>
            Close
          </Button>
          <Button
            onClick={() => {}}
            variant="contained"
            color="primary"
            fullWidth
          >
            Add
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}