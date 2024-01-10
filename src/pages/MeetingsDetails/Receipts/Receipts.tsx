import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./Receipts.scss";
import { ButtonWithIcon } from "../../../components/ButtonWithIcon/ButtonWithIcon";
import { AddReceiptModal } from "./AddReceiptModal/AddReceiptModal";

export const Receipts = () => {
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
      <AddReceiptModal isOpened={receiptModalOpened} closeModal={() => {setReceiptModalOpened(false)}} />
    </div>
  );
};
