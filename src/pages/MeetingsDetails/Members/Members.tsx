import React from 'react';
import { Typography } from "@mui/material";
import "./Members.scss"
import { ButtonWithIcon } from "../../../components/ButtonWithIcon/ButtonWithIcon";

export const Members = () => {
  return (
    <div className={'members'}>
      <div className={'members__header'}>
        <Typography variant={'h6'} sx={{ color: '#4A6072', fontWeight: 'bold'}}>Members</Typography>
        <ButtonWithIcon label={'Add member'} onClick={() => {}} width={'200px'} />
      </div>
    </div>
  )
}