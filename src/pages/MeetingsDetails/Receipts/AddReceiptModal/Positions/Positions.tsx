import React, { Dispatch, SetStateAction, useState } from "react";
import { Typography } from "@mui/material";
import { Member, Position } from "../../../types";
import { ButtonWithIcon } from "../../../../../components/ButtonWithIcon/ButtonWithIcon";
import "./Positions.scss"
import { NewPosition } from "./NewPosition/NewPosition";
import { CurrentPositions } from "./CurrentPositions/CurrentPositions";

export type PositionsProps = {
  setPositions: Dispatch<SetStateAction<Position[]>>;
  currentPositions: Position[];
  meetingMembers: Member[]
}

export const Positions = ({ setPositions, currentPositions, meetingMembers }: PositionsProps) => {
  const [newPositionFormOpened, setNewPositionFormOpened] = useState<boolean>(true);

  const addPosition = (newPosition: Position) => {
    setPositions([...currentPositions, newPosition]);
  }

  return (
      <div className={'positions'}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4A6072" }}>
         Positions
        </Typography>
        {currentPositions.length > 0 && <CurrentPositions positions={currentPositions} meetingMembers={meetingMembers} /> }
        {newPositionFormOpened ? (
            <NewPosition meetingMembers={meetingMembers} setNewPositionFormOpened={setNewPositionFormOpened} addPosition={addPosition} />
        ) : (
          <div className={'positions__add-button'}>
            <ButtonWithIcon label={'Add new position'} onClick={() => {setNewPositionFormOpened(true)}} />
          </div>
          )}
      </div>
  );
}