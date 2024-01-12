import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  MenuItem,
  TextField,
  Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { User } from "../../FriendsList/types";
import { getFriendsList } from "../../../services/FriendsService";
import { addMember } from "../../../services/MeetingMembershipService";
import { useParams } from "react-router-dom";

type AddMemberModalProps = {
  isOpened: boolean,
  closeModal: () => void,
  reloadDetails: () => void
}

export const AddMemberModal = ({ isOpened, closeModal, reloadDetails } : AddMemberModalProps) => {
  const [friendsList, setFriendsList] = useState<User[]>([])
  const { meetingId } = useParams();

  const [newMemberId, setMemberId] = useState<string | null>(null);

  const getData = () => {
    getFriendsList().then((r) => setFriendsList(r));
  }

  useEffect(() => {
    getData();
  }, []);

  const onAddMember = () => {
    addMember({ invitedUserId: newMemberId!, meetingId: meetingId! }).then(r => {
      closeModal();
      reloadDetails();
    })
  }

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
      <DialogContent className={"meethub-modal"}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4A6072" }}>
          Add member
        </Typography>
        <TextField
          fullWidth
          value={newMemberId}
          sx={{ margin: "30px 0" }}
          onChange={(e) => { // @ts-ignore
            setMemberId(e.target.value)}}
          select
          label="Add friend"
        >
          {friendsList.map((friend) =>
            <MenuItem value={friend.id}>{friend.firstName} {friend.lastName} ({friend.email})</MenuItem>
          )}
        </TextField>
        <div className={"meethub-modal__buttons"}>
          <Button onClick={closeModal} color="primary" fullWidth>
            Close
          </Button>
          <Button
            onClick={onAddMember}
            variant="contained"
            color="primary"
            disabled={newMemberId==null}
            fullWidth
          >
            Add
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}