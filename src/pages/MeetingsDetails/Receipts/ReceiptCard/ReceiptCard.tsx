import React from 'react';
import { GeneralReceiptInfo } from "../../types";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

type ReceiptCardProps = {
  receipt: GeneralReceiptInfo
}

export const ReceiptCard = ({ receipt } : ReceiptCardProps ) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: "0 3px 6px #00000029",
        padding: "5px 10px",
      }}
    >
      <CardContent sx={{ padding: 0, paddingBottom: '0px !important' }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          sx={{ padding: 0}}
        />
        <Typography
          align="left"
          variant={'h6'}
          sx={{ color: "#4A6072",
            height: '40px',
            fontWeight: "bold",
            fontSize: '16px',
            maxWidth: '100px',
            wordBreak: 'break-all',
            marginBottom: '20px' }}
        >
          {receipt.title}
        </Typography>
        <div className={'receipt_details'}>
          <Typography
            align="left"
          >
            {receipt.owner.firstName} {receipt.owner.lastName}
          </Typography>
          <Typography
            align="left"
            sx={{ color: "#1976D2", fontWeight: "bold" }}
            variant={'h6'}
          >
            {receipt.totalAmount} {receipt.currency}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}