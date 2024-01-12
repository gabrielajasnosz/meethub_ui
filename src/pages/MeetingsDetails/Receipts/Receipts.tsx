import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./Receipts.scss";
import { ButtonWithIcon } from "../../../components/ButtonWithIcon/ButtonWithIcon";
import { AddReceiptModal } from "./AddReceiptModal/AddReceiptModal";
import { GeneralReceiptInfo, Member } from "../types";
import { ReceiptCard } from "./ReceiptCard/ReceiptCard";

export type ReceiptsProps = {
  meetingMembers: Member[],
  receipts: GeneralReceiptInfo[],
  reloadData: () => void
}

export const Receipts = ({ meetingMembers, receipts, reloadData }: ReceiptsProps) => {
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
      <div className={'receipts__list'}>
        { receipts && receipts.map((receipt) =>
          <ReceiptCard receipt={receipt} />
        )}
      </div>
      <AddReceiptModal
        meetingMembers={meetingMembers}
        isOpened={receiptModalOpened}
        closeModal={() => {
          reloadData();
          setReceiptModalOpened(false)
        }}
      />
    </div>
  );
};
