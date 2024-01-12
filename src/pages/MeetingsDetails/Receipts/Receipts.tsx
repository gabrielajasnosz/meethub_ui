import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./Receipts.scss";
import { ButtonWithIcon } from "../../../components/ButtonWithIcon/ButtonWithIcon";
import { AddReceiptModal } from "./AddReceiptModal/AddReceiptModal";
import { Member } from "../types";

export type ReceiptsProps = {
  meetingMembers: Member[]
}

export const Receipts = ({ meetingMembers }: ReceiptsProps) => {

  const [receiptModalOpened, setReceiptModalOpened] = useState<boolean>(false);

  return (
    <div className={"receipts"}>
      <div className={'receipts__header'}>
        <Typography variant={"h6"} sx={{ color: "#4A6072", fontWeight: "bold" }}>
          Receipts
        </Typography>
        <ButtonWithIcon
          label={"Add receipt"}
          onClick={() => {setReceiptModalOpened(true)}}
          width={"200px"}
        />
      </div>
      <AddReceiptModal
        meetingMembers={meetingMembers}
        isOpened={receiptModalOpened}
        closeModal={() => {setReceiptModalOpened(false)}}
      />
    </div>
  );
};
