import React, { Dispatch, SetStateAction, useState } from "react";
import "./NewPosition.scss"
import { MenuItem, TextField } from "@mui/material";
import { Member, Position } from "../../../../types";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

export type NewPositionProps = {
  meetingMembers: Member[],
  setNewPositionFormOpened: Dispatch<SetStateAction<boolean>>,
  addPosition: (position: Position) => void
}

export const NewPosition = ({ meetingMembers, setNewPositionFormOpened, addPosition } : NewPositionProps) => {
  const [newPosition, setNewPosition] = useState<Position>({
    name: "",
    amount: 0,
    payers: []
  });

  const handleAddPosition = () => {
    addPosition(newPosition);
    setNewPositionFormOpened(false);
  }

  return (
    <div className={'new-positions'}>
      <div className={'new-positions__row'}>
        <TextField
          label="Name"
          variant="outlined"
          required={true}
          onChange={(event) => {setNewPosition({...newPosition, name: event.target.value})}}
          sx={{ width: '60%' }}
        />
        <TextField
          label="Amount"
          variant="outlined"
          type={'number'}
          required={true}
          onChange={(event) => {setNewPosition({...newPosition, amount: Number(event.target.value)})}}
          sx={{ width: '50%' }}
        />
      </div>
      <TextField
        select
        variant="outlined"
        label="Payers"
        fullWidth
        SelectProps={{
          multiple: true,
          value: newPosition.payers,
          //@ts-ignore
          onChange: (e) => {setNewPosition({...newPosition, payers: [...e.target.value]})}
        }}
      >
        {meetingMembers.map((member) => (
          <MenuItem
            key={member.id}
            value={member.id}
          >
            {member.firstName} {member.lastName}
          </MenuItem>
        ))}
      </TextField>
      <div className={'new-positions__row'}>
        <Button variant={'outlined'} onClick={() => {setNewPositionFormOpened(false)}} color={'secondary'}>
          <CloseIcon />
        </Button>
        <Button variant={'outlined'} onClick={handleAddPosition} color={'primary'}>
          <CheckIcon />
        </Button>
      </div>
    </div>
  )
}