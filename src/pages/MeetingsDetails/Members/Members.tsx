import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./Members.scss";
import { ButtonWithIcon } from "../../../components/ButtonWithIcon/ButtonWithIcon";
import { AddMemberModal } from "../AddMemberModal/AddMemberModal";
import { Member } from "../types";
import { MembersTable } from "./MembersTable/MembersTable";

type MembersProps = {
  reloadData: () => void,
  members: Member[]
}

export const Members = ({ reloadData, members } : MembersProps) => {
  const [memberModalOpened, setMemberModalOpened] = useState<boolean>(false);
  return (
    <div className={"members"}>
      <div className={"members__header"}>
        <Typography
          variant={"h6"}
          sx={{ color: "#4A6072", fontWeight: "bold" }}
        >
          Members
        </Typography>
        <ButtonWithIcon
          label={"Add member"}
          onClick={() => {setMemberModalOpened(true)}}
          width={"200px"}
        />
      </div>
      <MembersTable members={members} />
      <AddMemberModal isOpened={memberModalOpened} closeModal={() => setMemberModalOpened(false)} reloadDetails={reloadData} />
    </div>
  );
};
