import React from 'react';
import { Typography } from "@mui/material";
import "./Receipts.scss"

export const Receipts = () => {
  return (
    <div className={'receipts'}>
      <Typography variant={'h6'} sx={{ color: '#4A6072', fontWeight: 'bold'}}>Receipts</Typography>
    </div>
  )
}