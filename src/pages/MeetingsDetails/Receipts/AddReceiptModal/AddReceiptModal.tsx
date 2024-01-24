import React, { useState } from "react";
import { Button, Dialog, DialogContent, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./AddReceiptModal.scss";
import { Positions } from "./Positions/Positions";
import { Member, Position } from "../../types";
import { addReceipt } from "../../../../services/ReceiptService";
import { useParams } from "react-router-dom";

export type AddReceiptModalProps = {
  isOpened: boolean,
  closeModal: () => void,
  meetingMembers: Member[]
}


export const AddReceiptModal = ({ isOpened, closeModal, meetingMembers} : AddReceiptModalProps) => {
  const { meetingId } = useParams();
  const [title, setTitle] = useState<string>("");
  const [positions, setPositions] = useState<Position[]>([]);

  const handleSubmit = () => {
    addReceipt({ meetingId: meetingId!, positions, title}).then((x) => {
      closeModal();
    });
  }

  return (
    <Dialog open={isOpened} onClose={closeModal} maxWidth="sm" fullWidth>
      <IconButton
        edge="end"
        color="inherit"
        onClick={() => {
          closeModal();
          setPositions([]);
        }}
        aria-label="close"
        size="large"
        sx={{ position: "absolute", right: 20, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent className={"meethub-modal"}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4A6072" }}>
          Add receipt
        </Typography>
        <div className={'add-receipt-content'}>
          <TextField
            label="Title"
            variant="outlined"
            required={true}
            fullWidth
            onChange={(event) => {setTitle(event.target.value)}}
            sx={{ margin: "20px 0" }}
          />
          <Positions setPositions={setPositions} currentPositions={positions} meetingMembers={meetingMembers} />
        </div>
        <div className={"meethub-modal__buttons"}>
          <Button onClick={closeModal} color="primary" fullWidth>
            Close
          </Button>
          <Button
            onClick={handleSubmit}
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